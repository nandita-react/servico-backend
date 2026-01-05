const express=require("express");
const routers=express.Router();
const categoryController=require("./categoryController");


/**
 * @swagger
 * /api/categories/create:
 *   post:
 *     summary: Create a new category
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Category created successfully
 */
routers.post("/create",categoryController.create);


/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Category]
 *     description: Fetch all service categories
 *     responses:
 *       200:
 *         description: Category list fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   icon:
 *                     type: string
 *                     nullable: true
 *                   status:
 *                     type: boolean
 *                   serviceCount:
 *                     type: number
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 */
routers.get("/",categoryController.findAll);
// routers.get("/:id",categoryController.findById);
// routers.patch("/update/:id",categoryController.update);


// routers.patch("/updateStatus/:id",categoryController.updateActive);
// routers.delete("/:id",categoryController.delete);

module.exports=routers
