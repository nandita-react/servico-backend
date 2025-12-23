const mongoose=require("mongoose");

const RatingSchema = new mongoose.Schema({
   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    stars: {
        type: Number,
        min: 1,
        max: 5,
        required: true
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
});

module.exports=mongoose.model("Rating",RatingSchema);