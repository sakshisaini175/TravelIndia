import express from "express";
// import  CreateBooking  from "../controller/booking.controller.js";
import {CreateBooking, getAllBookings, getUserBookings,deleteBookingById,  updateBookingById, deleteAllBookings } from '../controllers/booking.controller.js'
// import authenticateUser from "../middleware/authMiddleware.js";  

const router = express.Router();

// ✅ Create a booking (POST) - Requires authentication
router.get("/alls", getAllBookings);
router.post("/create/:id", CreateBooking);

// ✅ Get logged-in user's bookings (GET) - Requires authentication
router.get("/:id", getUserBookings);

router.delete('/all', deleteAllBookings);  
router.delete('/:id', deleteBookingById);      
router.put('/:id', updateBookingById); 

  

export default router;

