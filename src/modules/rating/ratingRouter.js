const express=require("express");
const routers=express.Router();
const ratingController=require("./ratingController");
const router = require("../router/mainRoutes");

routers.post("/create",ratingController.create);
routers.get("/",ratingController.findAll);
routers.get("/:id",ratingController.findById);



module.exports=routers