const Schema=require("./citySchema");

class serviceRepository{
    constructor(request){
        this.requestBody=request?.body;
    }

    async create(){
        const newService=new Schema(this.requestBody);
        return await newService.save();
    }

    async findAll(){
        return await Schema.find();
    }

    async findById(id){
        return await Schema.findById({_id:id})
    }
}

module.exports=serviceRepository;