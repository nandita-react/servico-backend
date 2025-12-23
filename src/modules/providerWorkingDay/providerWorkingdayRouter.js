const express=require("express");
const routers=express.Router();
const providerWorkingdayController=require("./providerWorkingdayController");

routers.post("/create",providerWorkingdayController.create);
//routers.get("/",providerController.findAll);
// routers.get("/:id",categoryController.findById);
// routers.patch("/update/:id",categoryController.update);


// routers.patch("/updateStatus/:id",categoryController.updateActive);
// routers.delete("/:id",categoryController.delete);

module.exports=routers 