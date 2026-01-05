const express=require("express");
const routers=express.Router();
const bookingController=require("./bookingController");


/**
 * @swagger
 * /api/bookings/create:
 *   post:
 *     summary: Create a new booking
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customer
 *               - provider
 *               - service
 *               - scheduledDate
 *               - scheduledTime
 *               - totalAmount
 *               - finalAmount
 *             properties:
 *               customer:
 *                 type: string
 *                 description: User ID
 *               provider:
 *                 type: string
 *                 description: Provider ID
 *               service:
 *                 type: string
 *                 description: Service ID
 *               type:
 *                 type: string
 *                 enum: [one_time, subscription]
 *               scheduledDate:
 *                 type: string
 *                 format: date
 *               scheduledTime:
 *                 type: string
 *                 example: "10:00"
 *               address:
 *                 type: object
 *                 properties:
 *                   house:
 *                     type: string
 *                   street:
 *                     type: string
 *                   city:
 *                     type: string
 *                   pinCode:
 *                     type: string
 *               totalAmount:
 *                 type: number
 *               discountAmount:
 *                 type: number
 *               finalAmount:
 *                 type: number
 *               paymentMethod:
 *                 type: string
 *                 enum: [upi, card, cash, netbanking]
 *     responses:
 *       201:
 *         description: Booking created successfully
 */
routers.post("/create",bookingController.create)

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     summary: Get all bookings
 *     tags: [Booking]
 *     description: Fetch all booking records with customer, provider, and service details
 *     responses:
 *       200:
 *         description: Booking list fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   customer:
 *                     type: string
 *                   provider:
 *                     type: string
 *                   service:
 *                     type: string
 *                   status:
 *                     type: string
 *                     enum: [pending, confirmed, completed, cancelled]
 *                   type:
 *                     type: string
 *                     enum: [one_time, subscription]
 *                   scheduledDate:
 *                     type: string
 *                     format: date
 *                   scheduledTime:
 *                     type: string
 *                     example: "10:00"
 *                   totalAmount:
 *                     type: number
 *                   finalAmount:
 *                     type: number
 */
routers.get("/",bookingController.findAll);

module.exports=routers