const express=require("express");
const routers=express.Router();
const servicesController=require("./servicesController");


routers.post("/create",servicesController.create);
routers.get("/",servicesController.findAll);
routers.get("/:id",servicesController.findById);
routers.post("/:catId/:slug",servicesController.findByCategoryAndSlug);
routers.patch("/:id",servicesController.update);



module.exports=routers