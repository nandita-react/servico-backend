const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    name: {
        type: String,
        required: true
    },

    slug: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    shortDescription: {
        type: String
    },

    images: [
        {
            type: String
        }
    ],

    price: {
        type: Number,
        required: true
    },

    discountedPrice: {
        type: Number
    },

    duration: {
        type: Number // minutes
    },
    rating: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Rating",
        default: null
    },
    reviewsCount: {
        type: Number,
        default: 0
    },

    isPopular: {
        type: Boolean,
        default: false
    },

    isFeatured: {
        type: Boolean,
        default: false
    },

    inclusions: [String],
    exclusions: [String],

    faqs: [
        {
            question: String,
            answer: String
        }
    ]
}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

servicesSchema.pre("save", async function (next) {
    const existingName = await this.constructor.countDocuments({ name: this.name })

    if (existingName > 0) {
        return next(new Error("This Srvice already exists"));
    }

    next()
})

module.exports = mongoose.model("Service", servicesSchema);
