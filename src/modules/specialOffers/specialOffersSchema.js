const mongoose=require("mongoose");

const specialOffersSchema=new mongoose.Schema({
 
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    cta: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

module.exports=mongoose.model("Specialoffer",specialOffersSchema)
