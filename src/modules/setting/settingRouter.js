const express=require("express");
const routers=express.Router();
const settingController=require("./settingController");


/**
 * @swagger
 * /api/settings/create:
 *   post:
 *     summary: Create setting
 *     tags: [Setting]
 *     description: Create application settings with selected city
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - generalSetting
 *             properties:
 *               generalSetting:
 *                 type: object
 *                 required:
 *                   - cityId
 *                 properties:
 *                   cityId:
 *                     type: string
 *                     description: City ID reference
 *     responses:
 *       201:
 *         description: Setting created successfully
 */
routers.post("/create",settingController.create);

/**
 * @swagger
 * /api/settings:
 *   get:
 *     summary: Get all settings
 *     tags: [Setting]
 *     description: Fetch all application settings
 *     responses:
 *       200:
 *         description: Settings fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   generalSetting:
 *                     type: object
 *                     properties:
 *                       cityId:
 *                         type: string
 *                         description: City ID reference
 */
routers.get("/",settingController.findAll);

module.exports=routers