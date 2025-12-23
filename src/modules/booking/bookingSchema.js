const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({

    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    provider: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Provider",
        required: true
    },

    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        required: true
    },

    status: {
        type: String,
        enum: ["pending", "confirmed", "completed", "cancelled"],
        default: "pending"
    },

    type: {
        type: String,
        enum: ["one_time", "subscription"],
        default: "one_time"
    },

    scheduledDate: {
        type: Date,
        required: true
    },

    scheduledTime: {
        type: String,
        required: true // "10:00"
    },

    address: {
        house: {
            type: String,
        },
        street: {
            type: String
        },
        city: {
            type: String
        },
        pinCode: {
            type: String
        }
    },

    totalAmount: {
        type: Number,
        required: true
    },

    discountAmount: {
        type: Number,
        default: 0
    },

    finalAmount: {
        type: Number,
        required: true
    },

    paymentStatus: {
        type: String,
        enum: ["pending", "paid", "failed"],
        default: "pending"
    },

    paymentMethod: {
        type: String,
        enum: ["upi", "card", "cash", "netbanking"]
    },

    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: null
    },

    review: {
        type: String,
        default: null
    }
},{
   timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}
)

module.exports=mongoose.model("Booking",bookingSchema)