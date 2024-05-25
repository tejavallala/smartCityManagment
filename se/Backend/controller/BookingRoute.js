const express = require("express");
const Booking = require("../Model/BookingModel");
const booking = express.Router();

booking.post("/add", async (req, res) => {
    try {
        const { name, InDate,OutDate, InTime, OutTime } = req.body;
        const newBooking = new Booking({ name, InDate,OutDate, InTime, OutTime });
        await newBooking.save();
        res.status(200).json({ success: true, message: "Booking added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to add booking" });
    }
});

booking.get('/', async (req, res) => {
    try {
        const bookingData = await Booking.find();
        res.status(200).json(bookingData);
    } catch (error) {
        console.error(error);
        res.status(500).json({});
    }
});

module.exports = booking;
