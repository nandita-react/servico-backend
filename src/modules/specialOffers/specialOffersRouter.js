const express=require("express");
const routers=express.Router();
const specialOffersController=require("./specialOffersController");


/**
 * @swagger
 * /api/specialOffers:
 *   get:
 *     summary: Get all specialOffers
 *     tags: [specialOffers]
 *     description: Fetch all promotional specialOffers with banner details
 *     responses:
 *       200:
 *         description: specialOffers fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   title:
 *                     type: string
 *                   subtitle:
 *                     type: string
 *                   description:
 *                     type: string
 *                   bgColor:
 *                     type: string
 *                     example: "#FF5733"
 *                   image:
 *                     type: string
 *                     description: Image URL
 *                   cta:
 *                     type: string
 *                     example: "Book Now"
 *                   link:
 *                     type: string
 *                     description: Redirect URL
 */
routers.get("/",specialOffersController.findAll);

module.exports=routers