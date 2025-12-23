const express=require("express");
const routers=express.Router();
const offersController=require("./specialOffersController");

routers.get("/",offersController.findAll);

module.exports=routers