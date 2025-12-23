const express=require("express");
const routers=express.Router();
const categoryController=require("./categoryController");

routers.post("/create",categoryController.create);
routers.get("/",categoryController.findAll);
// routers.get("/:id",categoryController.findById);
// routers.patch("/update/:id",categoryController.update);


// routers.patch("/updateStatus/:id",categoryController.updateActive);
// routers.delete("/:id",categoryController.delete);

module.exports=routers
