const Schema=require("./settingSchema");

class settingRepo{
    constructor(request){
        this.requestBody=request?.body;
        
    }

    async create(){
        const newData=new Schema(this.requestBody);
        return await newData.save()
    }

    async findAll(){
        return await Schema.find()
    }
}

module.exports=settingRepo;