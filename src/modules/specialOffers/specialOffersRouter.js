const express=require("express");
const routers=express.Router();
const offersController=require("./specialOffersController");


/**
 * @swagger
 * /api/offers:
 *   get:
 *     summary: Get all offers
 *     tags: [Offers]
 *     responses:
 *       200:
 *         description: Offers fetched successfully
 */
routers.get("/",offersController.findAll);

module.exports=routers