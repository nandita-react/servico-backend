const Repository=require("./specialOffersRepository");
const Handler=require("./../../../handler")

exports.findAll = async (req, res) => {
   const cityRepo = new Repository(req)
    try {
        const cities = await cityRepo.findAll();
       return Handler.success(res, cities, 'fetch Successfully')
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}