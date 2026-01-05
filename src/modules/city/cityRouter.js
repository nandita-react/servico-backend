const express=require("express");
const routers=express.Router();
const cityController=require("./cityController");


/**
 * @swagger
 * /api/cities/create:
 *   post:
 *     summary: Create a new city
 *     tags: [City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               state:
 *                 type: string
 *     responses:
 *       201:
 *         description: City created successfully
 */
routers.post("/create",cityController.create);

/**
 * @swagger
 * /api/cities:
 *   get:
 *     summary: Get all cities
 *     tags: [City]
 *     description: Fetch all cities with state and coordinates
 *     responses:
 *       200:
 *         description: City list fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   cityName:
 *                     type: string
 *                   stateName:
 *                     type: string
 *                   coordinates:
 *                     type: object
 *                     properties:
 *                       lat:
 *                         type: number
 *                       lng:
 *                         type: number
 *                   popular:
 *                     type: boolean
 */
routers.get("/",cityController.findAll);

/**
 * @swagger
 * /api/cities/{id}:
 *   get:
 *     summary: Get city by ID
 *     tags: [City]
 *     description: Fetch a single city using its unique ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: City ID
 *     responses:
 *       200:
 *         description: City fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 cityName:
 *                   type: string
 *                 stateName:
 *                   type: string
 *                 coordinates:
 *                   type: object
 *                   properties:
 *                     lat:
 *                       type: number
 *                     lng:
 *                       type: number
 *                 popular:
 *                   type: boolean
 *       404:
 *         description: City not found
 */
routers.get("/:id",cityController.findById);



module.exports=routers;
