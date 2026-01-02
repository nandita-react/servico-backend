const express=require("express");
const routers=express.Router();
const settingController=require("./settingController");


/**
 * @swagger
 * /api/setting/create:
 *   post:
 *     summary: Create setting
 *     tags: [Setting]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               generalSetting:
 *                 type: object
 *                 properties:
 *                   cityId:
 *                     type: string
 *               notifications:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: boolean
 *                   sms:
 *                     type: boolean
 *     responses:
 *       201:
 *         description: Setting created successfully
 */
routers.post("/create",settingController.create);

/**
 * @swagger
 * /api/setting:
 *   get:
 *     summary: Get all settings
 *     tags: [Setting]
 *     responses:
 *       200:
 *         description: Settings fetched successfully
 */
routers.get("/",settingController.findAll);

module.exports=routers