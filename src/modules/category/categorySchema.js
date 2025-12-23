const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    icon: {
        type: String,
        default: null
    },
    status: {
        type: Boolean,
        default: false
    },
    serviceCount: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

CategorySchema.pre("save", async function (next) {
    const existingName = await this.constructor.countDocuments({ name: this.name })

    if (existingName > 0) {
        return next(new Error("This category already exists"));
    }

    next()
})

module.exports = mongoose.model("Category", CategorySchema)