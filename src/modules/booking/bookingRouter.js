const express=require("express");
const routers=express.Router();
const bookingController=require("./bookingController");


/**
 * @swagger
 * /api/booking/create:
 *   post:
 *     summary: Create a new booking
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               serviceId:
 *                 type: string
 *               bookingDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Booking created successfully
 */
routers.post("/create",bookingController.create)

/**
 * @swagger
 * /api/booking:
 *   get:
 *     summary: Get all bookings
 *     tags: [Booking]
 *     responses:
 *       200:
 *         description: Booking list fetched successfully
 */
routers.get("/",bookingController.findAll);

module.exports=routers