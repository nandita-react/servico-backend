const Repository=require("./servicesRepository");
const Handler=require("./../../../handler")

exports.create = async (req, res) => {
    const servicesRepo = new Repository(req)
    try {
        const newService = await servicesRepo.create()
       return Handler.success(res, newService, 'New service Create Successfully');
    } catch (error) {
        console.log(error)
      return  Handler.error(res, error.messsage)
    }
}

exports.findAll = async (req, res) => {
   const servicesRepo = new Repository(req)
    try {
        const services = await servicesRepo.find();
       return Handler.success(res, services, 'fetch Successfully')
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}

exports.findById = async (req, res) => {
    const servicesRepo = new Repository(req)
    try {
        const service = await servicesRepo.findById(req.params.id);
       return Handler.success(res, service, 'fetch Successfully')
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}

exports.findByCategoryAndSlug =async(req,res)=>{
  const servicesRepo = new Repository(req)
  try{
     const result=await servicesRepo.findByCategoryAndSlug (req.params.catId,req.params.slug)
      return Handler.success(res, result, 'fetch Successfully')
  }catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}

exports.update=async(req,res)=>{
   const servicesRepo = new Repository(req)
    try {
        const updateService = await servicesRepo.update(req.params.id);
       return Handler.success(res, updateService, 'Updated Successfully')
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    } 
}