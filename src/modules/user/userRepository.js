const Schema=require("./userSchema");

class userRepository{
    constructor(request){
        this.requestBody=request?.body;
        this.requestQuery=request?.query;
    }

    async create(){
        const newUser=new Schema(this.requestBody);
        return await newUser.save()
    }

    async findByPh(phone){
   return await Schema.findOne({phone:phone})
    }

   
}

module.exports=userRepository