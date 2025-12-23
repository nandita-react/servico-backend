const mongoose=require("mongoose");

const citySchema=new mongoose.Schema({
    cityName:{
        type:String,
        require:true
    },
    stateName:{
         type:String,
        require:true
    },
     coordinates: {
        lat: {
            type: Number,
            required: true
        },
        lng: {
            type: Number,
            required: true
        }
    },
    popular:{
        type:Boolean,
        default:false
    }
},{
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

citySchema.pre("save", async function (next) {
    const existingName = await this.constructor.countDocuments({ cityName: this.cityName })

    if (existingName > 0) {
        return next(new Error("This City already exists"));
    }

    next()
})

module.exports=mongoose.model("City",citySchema);