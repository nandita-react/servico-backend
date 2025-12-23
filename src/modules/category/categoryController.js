const Repository=require("./categoryRepository");
const Handler=require("./../../../handler")

exports.create = async (req, res) => {
    const categoryRepo = new Repository(req)
    try {
        const newCategory = await categoryRepo.create()
       return Handler.success(res, newCategory, 'New Category Create Successfully');
    } catch (error) {
        console.log(error)
      return  Handler.error(res, error.messsage)
    }
}

exports.findAll = async (req, res) => {
   const categoryRepo = new Repository(req)
    try {
        const allCategory = await categoryRepo.find();
       return Handler.success(res, allCategory, 'fetch Successfully')
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}

exports.findById = async (req, res) => {
    const categoryRepo = new Repository(req)
    try {
        const category = await categoryRepo.findById(req.params.id);
       return Handler.success(res, category, 'fetch Successfully')
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}

exports.update = async (req, res) => {
    const categoryRepo = new Repository(req)
    try {
        const result = await categoryRepo.update(req.params.id);
     return   Handler.success(res, result, 'Update Successfully');
    } catch (error) {
        console.log(error);
      return  Handler.error(res, error.messsage)
    }
}

exports.updateActive=async(req,res)=>{
    const categoryRepo = new Repository(req)
    try{
         const result = await categoryRepo.updateStatus(req.params.id);
      return  Handler.success(res, result, ' Status Update Successfully');
    }catch(error){
     return  Handler.error(res, error.messsage) 
    }   
}

exports.delete=async(req,res)=>{
     const categoryRepo = new Repository(req)
   
     try{
        const result=await categoryRepo.delete(req.params.id);
         return Handler.success(res,result,'Delete Successfully');
     }catch(error){
       return Handler.error(res,error.message) 
     }
}