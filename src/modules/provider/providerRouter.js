const express=require("express");
const routers=express.Router();
const providerController=require("./providerController");
const authMiddleware =require("../middleware/verifytoken")

routers.post("/create",authMiddleware,providerController.create);
//routers.get("/",providerController.findAll);
 routers.get("/:id",providerController.findById);
// routers.patch("/update/:id",categoryController.update);


// routers.patch("/updateStatus/:id",categoryController.updateActive);
// routers.delete("/:id",categoryController.delete);

module.exports=routers 