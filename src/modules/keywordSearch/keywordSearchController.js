const Schema=require("./keywordSearchSchema");
const Handler=require("./../../../handler")

exports.saveKeyword =async(req,res)=>{
    try{
         const {keyword,location}=req.body;
         let record=await Schema.findOne({keyword,location});

         if(record){
            record.searchCount +=1;
            await record.save()
         }else{
            record=await Schema.create({
            keyword,
            location
           })
         }
         Handler.success(res,record,"Record Successfully save")
    }catch(error){
      Handler.error(res,error.message)
    }
}