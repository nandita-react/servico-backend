const Schema = require("./servicesSchema");
const Category = require("../category/categorySchema")

class serviceRepository {
    constructor(request) {
        this.requestBody = request?.body;
        this.requestQuery = request?.query;
        this.requestParams=request?.params
    }

    async create() {
        const newService = new Schema(this.requestBody);
        const savedService = await newService.save();

        await Category.updateOne(
            { _id: savedService.category },
            { $inc: { serviceCount: 1 } }
        )

        return savedService
    }

    async find() {

        try {
            const { page, limit } = this.requestQuery;

            const defaultSortField = "createdAt";
            const defaultSortOrder = -1;
            const sortObject = this.prepareSortObject(defaultSortField, defaultSortOrder);
            const queryObject = this.prepareQuery()

            const pageNum = Number(page);
            const limitNum = Number(limit);


            const skip = (page - 1) * limit

            const [data, totalCount] = await Promise.all([
                Schema.find(queryObject).sort(sortObject).skip(skip),
                Schema.countDocuments(queryObject),
                //   Schema.countDocuments({ status: true }),
                //   Schema.countDocuments({ status: false })
            ]);

            return {
                data,
                totalCount,
                page: pageNum,
                limit: limitNum
            }
        }
        catch (error) {
            console.error("Repository Error:", error);
            throw error;
        }

    }

    prepareSortObject(defaultSortField, defaultSortOrder) {
        if (this.requestBody?.sort) {
            const { sortField, sortOrder } = this.requestBody.sort;

            return { [sortField || defaultSortField]: sortOrder === "ace" ? 1 : -1 }

        }
        return { [defaultSortField]: defaultSortOrder }
    }

    prepareQuery() {

        if (!this.requestQuery?.keyword) return {}

        const keyword = this.requestQuery.keyword
        return {
            name: { $regex: keyword, $options: "i" }
        }
    }



    async findById(id) {
        return await Schema.findById({ _id: id })
    }

    async findByCategoryAndSlug (categoryId,slug) {
        const result = await Schema.findOne({
            category: categoryId,
            slug: slug
        }).populate("category", "name")
            .populate({
                path: "rating",
                select: "stars review",
                populate: {
                    path: "user",
                    select: "name"
                }
            });
            return result
    }

    async update(id) {

        const oldService = await Schema.findById(id);

        const updatedService = await Schema.findByIdAndUpdate(
            id,
            this.requestBody,
            { new: true }
        );

        // if category changed
        if (oldService.category.toString() !== updatedService.category.toString()) {

            // decrease old category
            await Category.updateOne(
                { _id: oldService.category },
                { $inc: { serviceCount: -1 } }
            );

            // increase new category
            await Category.updateOne(
                { _id: updatedService.category },
                { $inc: { serviceCount: 1 } }
            );
        }

        return updatedService;
    }
}

module.exports = serviceRepository;