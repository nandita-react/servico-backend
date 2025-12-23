const mongoose = require("mongoose");

const providerSchema = new mongoose.Schema({

    basicInfo: {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",   // reference to the User collection
            required: true
        },
        city: {
            type: String,
            enum: ["Select City", "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "kolkata", "Pune", "Ahmedabad"],
            default: "Select City"
        },
        experience: {
            type: Number,
            default: 0
        },
        bio: {
            type: String,
            required: [true, "Bio is required"]
        }
    },
    providerServices: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProviderService",
        //  required: true
    },
    working: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "WorkingDay",
        // required: true
    },
    documents: {
        idProof: {
            url: { type: String, default: null }
        },
        addressProof: {
            url: { type: String, default: null }
        },
        certificate: {
            url: { type: String, default: null }
        }
    },
    payment: {
        accountHolderName: { type: String, required: true },
        accountNumber: { type: String, required: true },
        bankName: { type: String, required: true },
        ifsc: { type: String, required: true }
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

module.exports = mongoose.model("Provider", providerSchema);