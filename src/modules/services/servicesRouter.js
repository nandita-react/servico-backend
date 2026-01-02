const express=require("express");
const routers=express.Router();
const servicesController=require("./servicesController");


/**
 * @swagger
 * /api/services/create:
 *   post:
 *     summary: Create service
 *     tags: [Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               categoryId:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Service created successfully
 */
routers.post("/create",servicesController.create);

/**
 * @swagger
 * /api/services:
 *   get:
 *     summary: Get all services
 *     tags: [Services]
 *     responses:
 *       200:
 *         description: Services fetched successfully
 */
routers.get("/",servicesController.findAll);

/**
 * @swagger
 * /api/services/{id}:
 *   get:
 *     summary: Get service by ID
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Service ID
 *     responses:
 *       200:
 *         description: Service fetched successfully
 *       404:
 *         description: Service not found
 */
routers.get("/:id",servicesController.findById);

/**
 * @swagger
 * /api/services/{catId}/{slug}:
 *   post:
 *     summary: Get services by category and slug
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: catId
 *         required: true
 *         schema:
 *           type: string
 *         description: Category ID
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: Service slug
 *     responses:
 *       200:
 *         description: Services fetched successfully
 */
routers.post("/:catId/:slug",servicesController.findByCategoryAndSlug);

/**
 * @swagger
 * /api/services/{id}:
 *   patch:
 *     summary: Update service
 *     tags: [Services]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Service ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Service updated successfully
 */
routers.patch("/:id",servicesController.update);



module.exports=routers