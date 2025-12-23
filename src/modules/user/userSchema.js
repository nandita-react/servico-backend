const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: ["Name is required", true]
    },
    email: {
        type: String,
        required: ["Email is required", true],
        unique: true
    },
     phoneNumber: {
        type: String,
        required: true,
        match: [/^[0-9]{10}$/, "Phone number must be 10 digits only"],
         unique: true
    },
    avatar:{
     url: { type: String, default: null },
    },

    address: [{
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
        },
        isdefault:{
            type:Boolean,
            default:true
        }
    }]
}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

UserSchema.pre("save", async function (next) {

    const existingEmail =  await this.constructor.countDocuments({ email: this.email })

    if (existingEmail > 0) {
        return next(new Error("This user already exists"));
    }

    next()
})

module.exports=mongoose.model("User",UserSchema);