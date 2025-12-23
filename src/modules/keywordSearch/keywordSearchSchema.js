const mongoose=require("mongoose");

const keywordSearchSchema=new mongoose.Schema({
    keyword:{
        type:String,
        required:true
    },
   location:{
    type:String,
    require:true
   },
   searchCount:{
    type:Number,
    default:1
   },
  
},{
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

module.exports=mongoose.model("KeywordSearch",keywordSearchSchema)