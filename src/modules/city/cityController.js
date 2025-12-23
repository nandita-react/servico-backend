const Repository=require("./cityRepository");
const Handler=require("./../../../handler")

exports.create = async (req, res) => {
    const cityRepo = new Repository(req)
    try {
        const newCity = await cityRepo.create()
       return Handler.success(res, newCity, 'New City Create Successfully');
    } catch (error) {
        console.log(error)
      return  Handler.error(res, error.messsage)
    }
}

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

exports.findById = async (req, res) => {
    const cityRepo = new Repository(req)
    try {
        const city = await cityRepo.findById(req.params.id);
       return Handler.success(res, city, 'fetch Successfully')
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}