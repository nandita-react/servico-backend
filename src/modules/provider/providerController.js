const Repository=require("./providerRepository");
const Handler=require("./../../../handler")

exports.create = async (req, res) => {
    const providerRepo = new Repository(req)
    try {
        const newProvider = await providerRepo.create()
       return Handler.success(res, newProvider, 'New Provider Create Successfully');
    } catch (error) {
        console.log(error)
      return  Handler.error(res, error.messsage)
    }
}

exports.findById = async (req, res) => {
    const providerRepo = new Repository(req)
    try {
        const provider = await providerRepo.findById(req.params.id);
       return Handler.success(res, provider, 'fetch Successfully')
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}