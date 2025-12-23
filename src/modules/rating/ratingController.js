const Repository=require("./ratingRepository");
const Handler=require("./../../../handler")

exports.create = async (req, res) => {
    const ratingRepo = new Repository(req)
    try {
        const newCreatingRating = await ratingRepo.create()
       return Handler.success(res, newCreatingRating, 'New Rating Create Successfully');
    } catch (error) {
        console.log(error)
      return  Handler.error(res, error.messsage)
    }
}

exports.findAll = async (req, res) => {
   const ratingRepo = new Repository(req)
    try {
        const ratings = await ratingRepo.find();
       return Handler.success(res, ratings, 'fetch Successfully')
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}

exports.findById = async (req, res) => {
    const ratingRepo = new Repository(req)
    try {
        const rating = await ratingRepo.findById(req.params.id);
       return Handler.success(res, rating, 'fetch Successfully')
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}