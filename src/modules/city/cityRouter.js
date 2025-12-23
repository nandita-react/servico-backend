const express=require("express");
const routers=express.Router();
const cityController=require("./cityController");


routers.post("/create",cityController.create);
routers.get("/",cityController.findAll);
routers.get("/:id",cityController.findById);



module.exports=routers;