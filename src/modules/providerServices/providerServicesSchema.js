const mongoose=require("mongoose");

const providerServices=new mongoose.Schema({

    category:{
         type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required:true
    },
    services:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Service",
        required:true
    }
},{
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

module.exports=mongoose.model("ProviderService",providerServices)