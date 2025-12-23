const express=require("express");
const routes=express.Router();
const userController=require("./userController");


routes.post("/sendOtp",userController.sendOtp);
routes.post("/verifyOtp",userController.verifyedOtp)
routes.post("/create",userController.create);

module.exports=routes;