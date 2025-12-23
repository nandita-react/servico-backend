const Repository=require("./providerServicesRepository");
const Handler=require("./../../../handler")

exports.create = async (req, res) => {
    const providerServicesrepo = new Repository(req)
    try {
        const newService = await providerServicesrepo.create()
       return Handler.success(res, newService, 'New ProviderServices Create Successfully');
    } catch (error) {
        console.log(error)
      return  Handler.error(res, error.messsage)
    }
}