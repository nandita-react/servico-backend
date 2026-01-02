const express=require("express");
const routers=express.Router();
const providerWorkingdayController=require("./providerWorkingdayController");


/**
 * @swagger
 * /api/provider-workingday/create:
 *   post:
 *     summary: Create provider working day
 *     tags: [Provider Working Day]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               providerId:
 *                 type: string
 *               day:
 *                 type: string
 *                 example: Monday
 *               startTime:
 *                 type: string
 *                 example: "09:00"
 *               endTime:
 *                 type: string
 *                 example: "18:00"
 *     responses:
 *       201:
 *         description: Provider working day created successfully
 */
routers.post("/create",providerWorkingdayController.create);
//routers.get("/",providerController.findAll);
// routers.get("/:id",categoryController.findById);
// routers.patch("/update/:id",categoryController.update);


// routers.patch("/updateStatus/:id",categoryController.updateActive);
// routers.delete("/:id",categoryController.delete);

module.exports=routers 