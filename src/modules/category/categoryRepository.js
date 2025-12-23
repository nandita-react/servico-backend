const { options } = require("../user/userRouter");
const Schema = require("./categorySchema");

class categoryRepo {
    constructor(request) {
        this.requestBody = request.body;
        this.requestQuery = request.query;
    }

    async create() {
        const newCategory = new Schema(this.requestBody);
        return await newCategory.save();
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

            const [data, totalCount, activeCount, inactiveCount] = await Promise.all([
                Schema.find(queryObject).sort(sortObject).skip(skip),
                Schema.countDocuments(queryObject),
                Schema.countDocuments({ status: true }),
                Schema.countDocuments({ status: false })
            ]);

            return {
                data,
                totalCount,
                activeCount, inactiveCount,
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

    async findByName(name) {
        return await Schema.findOne({ name: name })
    }

    async update(id) {
        return await Schema.findByIdAndUpdate({ _id: id }, this.requestBody, { new: true })
    }

    async updateStatus(id) {
        return await Schema.findByIdAndUpdate({ _id: id }, { status: this.requestBody.status }, { new: true })
    }

    async delete(id) {
        return await Schema.findByIdAndDelete({ _id: id })
    }
}

module.exports = categoryRepo