const express=require("express");
const routers=express.Router();
const cityController=require("./keywordSearchController");



/**
 * @swagger
 * /api/city/search:
 *   post:
 *     summary: Search city by keyword
 *     tags: [City]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               keyword:
 *                 type: string
 *             example:
 *               keyword: kolkata
 *     responses:
 *       200:
 *         description: City search result
 */
routers.post("/search",cityController.saveKeyword);




module.exports=routers;