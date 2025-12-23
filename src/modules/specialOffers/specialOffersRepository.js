const Schema=require("./specialOffersSchema");

class offers{
    constructor(request){
        this.requestBody=request?.body
    }
    async findAll(){
        return await Schema.find();
    }
}

module.exports=offers