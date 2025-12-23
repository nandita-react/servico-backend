const Schema=require("./ratingSchema");

class RatingRepository{
    constructor(request){
        this.requestBody=request?.body;
    }

    async create(){
     const newRating=new Schema(this.requestBody);
     return await newRating.save();
    }

    async find(){
        return await Schema.find();
    }

    async findById(id){
       return await Schema.findById({_id:id});
    }
}

module.exports=RatingRepository