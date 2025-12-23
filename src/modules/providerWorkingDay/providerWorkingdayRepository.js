const Schema=require("./providerWorkingdaySchema");

class workingdayRepository{
    constructor(request){
        this.requestBody=request?.body
    }
    async create(){
        const newWorkingday=new Schema(this.requestBody);
        return await newWorkingday.save();
    }
}

module.exports=workingdayRepository;