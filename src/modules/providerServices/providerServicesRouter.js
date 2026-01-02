const express=require("express");
const routers=express.Router();
const providerServicesController=require("./providerServicesController");


/**
 * @swagger
 * /api/provider-services/create:
 *   post:
 *     summary: Create provider service
 *     tags: [Provider Services]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               providerId:
 *                 type: string
 *               serviceId:
 *                 type: string
 *               price:
 *                 type: number
 *               duration:
 *                 type: number
 *     responses:
 *       201:
 *         description: Provider service created successfully
 */
routers.post("/create",providerServicesController.create);
//routers.get("/",providerController.findAll);
// routers.get("/:id",categoryController.findById);
// routers.patch("/update/:id",categoryController.update);


// routers.patch("/updateStatus/:id",categoryController.updateActive);
// routers.delete("/:id",categoryController.delete);

module.exports=routers 