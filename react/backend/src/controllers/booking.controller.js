import Booking from "../models/booking.model.js";

// Create a new booking
const CreateBooking = async (req, res) => {
  try {
    const { name, email, phone, date, time, guests } = req.body;

    // Optional userId from authenticated user or from request body
    const userId = req.params.id;

    if (!name || !email || !phone || !date || !guests) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Ensure guests is a number
    const guestsNumber = Number(guests);
    if (isNaN(guestsNumber)) {
      return res.status(400).json({ message: "Guests must be a valid number" });
    }

    const newBooking = new Booking({
      userId,
      name,
      email,
      phone,
      date,
      time: time || "",
      guests: guestsNumber
    });

    await newBooking.save();

    res.status(201).json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    console.error("Booking creation error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const { id } = req.params;
    const bookings = await Booking.find({ userId: id });
    res.status(200).json({ bookings });
  } catch (error) {
    console.error("Get user bookings error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all bookings
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .sort({ createdAt: -1 });

    res.status(200).json({ total: bookings.length, bookings });
  } catch (error) {
    console.error("Get all bookings error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// PUT /api/booking/:id
const updateBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, date, time, guests } = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { name, email, phone, date, time, guests },
      { new: true } // Return updated doc
    );

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking updated successfully", booking: updatedBooking });
  } catch (error) {
    console.error("Update booking error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// DELETE booking by ID
const deleteBookingById = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Booking.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Delete booking error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// DELETE all bookings
const deleteAllBookings = async (req, res) => {
  try {
    await Booking.deleteMany({});
    res.status(200).json({ message: "All bookings deleted successfully" });
  } catch (error) {
    console.error("Delete all bookings error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export {
  CreateBooking, getUserBookings, getAllBookings, deleteBookingById,
  deleteAllBookings, updateBookingById
};