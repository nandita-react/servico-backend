const express=require("express");
const routers=express.Router();
const settingController=require("./settingController");

routers.post("/create",settingController.create);
routers.get("/",settingController.findAll);

module.exports=routers