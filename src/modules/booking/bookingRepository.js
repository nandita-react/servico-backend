const Schema=require("./bookingSchema")

class BookingRepository{
    constructor(request){
        this.requestBody=request?.body;
    }


     async create(){
      const newBooking=new Schema(this.requestBody);
      return await newBooking.save();
     }

    async findAll(){
        return  await Schema.find()
    }
}

module.exports=BookingRepository;