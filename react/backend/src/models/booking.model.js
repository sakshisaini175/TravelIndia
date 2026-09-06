
import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Link to User model
    required: false
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // Link to Product model
    required: false
  },
  productName: {
    type: String,
    required: false
  },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: false },
  guests: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Confirmed"
  }
}, { timestamps: true });

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
