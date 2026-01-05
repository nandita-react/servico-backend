const express=require("express");
const routers=express.Router();
const ratingController=require("./ratingController");
const router = require("../router/mainRoutes");

/**
 * @swagger
 * /api/rating/create:
 *   post:
 *     summary: Create rating
 *     tags: [Rating]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               providerId:
 *                 type: string
 *               rating:
 *                 type: number
 *                 example: 4.5
 *               review:
 *                 type: string
 *     responses:
 *       201:
 *         description: Rating created successfully
 */
routers.post("/create",ratingController.create);

/**
 * @swagger
 * /api/rating:
 *   get:
 *     summary: Get all ratings
 *     tags: [Rating]
 *     description: Fetch all user ratings with stars and reviews
 *     responses:
 *       200:
 *         description: Ratings fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   user:
 *                     type: string
 *                     description: User ID reference
 *                   stars:
 *                     type: number
 *                     minimum: 1
 *                     maximum: 5
 *                   review:
 *                     type: string
 *                     nullable: true
 */
routers.get("/",ratingController.findAll);

/**
 * @swagger
 * /api/rating/{id}:
 *   get:
 *     summary: Get rating by ID
 *     tags: [Rating]
 *     description: Fetch a single rating using its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Rating ID
 *     responses:
 *       200:
 *         description: Rating fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 user:
 *                   type: string
 *                   description: User ID reference
 *                 stars:
 *                   type: number
 *                   minimum: 1
 *                   maximum: 5
 *                 review:
 *                   type: string
 *                   nullable: true
 *       404:
 *         description: Rating not found
 */
routers.get("/:id",ratingController.findById);



module.exports=routers