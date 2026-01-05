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
 *     responses:
 *       200:
 *         description: City list
 */
routers.get("/",cityController.findAll);

/**
 * @swagger
 * /api/cities/{id}:
 *   get:
 *     summary: Get city by ID
 *     tags: [City]
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
 *       404:
 *         description: City not found
 */
routers.get("/:id",cityController.findById);



module.exports=routers;
