const Schema=require("./providerServicesSchema");


class providerServices{
    constructor(request){
        this.requestBody=request?.body;

    }
    async create(){
        const newProviderServices=new Schema(this.requestBody);
        return await newProviderServices.save();
    }

    async findById(id){
        return await Schema.findById({_id:id});
    }
}

module.exports=providerServices;