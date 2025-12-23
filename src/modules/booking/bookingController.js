const Repository=require("./bookingRepository");
const Handler=require("./../../../handler")

exports.create = async (req, res) => {
   const bookingRepo = new Repository(req)
    try {
        const newBooking = await bookingRepo.create();
       return Handler.success(res, newBooking, 'New Booking Add Successfull')
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}

exports.findAll = async (req, res) => {
   const bookingRepo = new Repository(req)
    try {
        const allBooking = await bookingRepo.findAll();
       return Handler.success(res, allBooking, 'fetch Successfully')
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}

