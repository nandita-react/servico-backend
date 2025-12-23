const express=require("express");
const routers=express.Router();
const cityController=require("./keywordSearchController");


routers.post("/search",cityController.saveKeyword);




module.exports=routers;