const Schema = require("./providerSchema");

class providerRepo {
    constructor(request) {
        this.request = request;
        this.requestBody = request?.body;

    }

    async create() {

        const providerData = this.requestBody;
        providerData.user = this.request.userId;

        const newProvider = new Schema(providerData);

        return await newProvider.save();
    }

    async findById(id) {
        const provider = await Schema.findById({ _id: id })
            .populate("basicInfo.user", "name email phoneNumber ")
            .populate({
                path: "providerServices",
                populate: [
                    { path: "category", select: "name" },
                    { path: "services", select: "name" }
                ]
            }).populate("working")
        return provider;
    }

    async update(id) {

    }
}
module.exports = providerRepo