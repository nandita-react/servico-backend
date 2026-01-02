const express=require("express");
const routers=express.Router();
const providerController=require("./providerController");
const authMiddleware =require("../middleware/verifytoken")


/**
 * @swagger
 * /api/provider/create:
 *   post:
 *     summary: Create a new provider
 *     tags: [Provider]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Provider created successfully
 *       401:
 *         description: Unauthorized
 */
routers.post("/create",authMiddleware,providerController.create);
//routers.get("/",providerController.findAll);

/**
 * @swagger
 * /api/provider/{id}:
 *   get:
 *     summary: Get provider by ID
 *     tags: [Provider]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Provider ID
 *     responses:
 *       200:
 *         description: Provider fetched successfully
 *       404:
 *         description: Provider not found
 */
 routers.get("/:id",providerController.findById);
// routers.patch("/update/:id",categoryController.update);


// routers.patch("/updateStatus/:id",categoryController.updateActive);
// routers.delete("/:id",categoryController.delete);

module.exports=routers 