const Repository=require("./settingRepository");
const Handler=require("./../../../handler");

exports.create = async (req, res) => {
    const settingRepo = new Repository(req)
    try {
        const newdata = await settingRepo.create()
       return Handler.success(res, newdata, 'New Data Create Successfully');
    } catch (error) {
        console.log(error)
      return  Handler.error(res, error.messsage)
    }
}

exports.findOne = async (req, res) => {
   const settingRepo = new Repository(req)
    try {
        const allinformation = await settingRepo.findOne();
       return Handler.success(res, allinformation, 'fetch Successfully')
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}