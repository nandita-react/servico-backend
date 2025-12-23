const Repository=require("./providerWorkingdayRepository");
const Handler=require("./../../../handler");


exports.create = async (req, res) => {
    const providerWorkingday = new Repository(req)
    try {
        const newWorkingday = await providerWorkingday.create()
       return Handler.success(res, newWorkingday, 'New ProviderServices Create Successfully');
    } catch (error) {
        console.log(error)
      return  Handler.error(res, error.messsage)
    }
}
