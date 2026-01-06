const Schema=require("./settingSchema");

class settingRepo{
    constructor(request){
        this.requestBody=request?.body;
        
    }

    async create(){
        const newData=new Schema(this.requestBody);
        return await newData.save()
    }

    async findOne(){
        return await Schema.findOne().populate("generalSetting.cityId","cityName")
    }
}

module.exports=settingRepo;
