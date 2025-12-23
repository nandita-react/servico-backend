const express=require("express");
const routers=express.Router();
const bookingController=require("./bookingController");

routers.post("/create",bookingController.create)
routers.get("/",bookingController.findAll);

module.exports=routers