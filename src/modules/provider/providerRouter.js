const express=require("express");
const routers=express.Router();
const providerController=require("./providerController");
const authMiddleware =require("../middleware/verifytoken")


/**
 * @swagger
 * /api/providers/create:
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
 * /api/providers/{id}:
 *   get:
 *     summary: Get provider by ID
 *     tags: [Provider]
 *     description: Fetch provider details including basic info, services, working days, documents, and payment info
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 basicInfo:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: string
 *                       description: User ID reference
 *                     city:
 *                       type: string
 *                       enum:
 *                         - Select City
 *                         - Mumbai
 *                         - Delhi
 *                         - Bangalore
 *                         - Hyderabad
 *                         - Chennai
 *                         - kolkata
 *                         - Pune
 *                         - Ahmedabad
 *                     experience:
 *                       type: number
 *                     bio:
 *                       type: string
 *                 providerServices:
 *                   type: string
 *                   description: ProviderService ID
 *                 working:
 *                   type: string
 *                   description: WorkingDay ID
 *                 documents:
 *                   type: object
 *                   properties:
 *                     idProof:
 *                       type: object
 *                       properties:
 *                         url:
 *                           type: string
 *                           nullable: true
 *                     addressProof:
 *                       type: object
 *                       properties:
 *                         url:
 *                           type: string
 *                           nullable: true
 *                     certificate:
 *                       type: object
 *                       properties:
 *                         url:
 *                           type: string
 *                           nullable: true
 *                 payment:
 *                   type: object
 *                   properties:
 *                     accountHolderName:
 *                       type: string
 *                     accountNumber:
 *                       type: string
 *                     bankName:
 *                       type: string
 *                     ifsc:
 *                       type: string
 *       404:
 *         description: Provider not found
 */
 routers.get("/:id",providerController.findById);
// routers.patch("/update/:id",categoryController.update);


// routers.patch("/updateStatus/:id",categoryController.updateActive);
// routers.delete("/:id",categoryController.delete);

module.exports=routers 