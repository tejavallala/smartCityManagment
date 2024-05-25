const express = require("express");
const parkingModel = require("../Model/ParkingModel");
const Parking = express.Router();

// GET all parking data
Parking.get("/", async (req, res) => {
    try {
        const parkingData = await parkingModel.find();
        res.status(200).json(parkingData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// PUT edit parking data
Parking.put("/edit/:id", async (req, res) => {
    try {
        const { name, area, distance, status } = req.body;
        const updatedParking = await parkingModel.findByIdAndUpdate(
            req.params.id,
            { name, area, distance, status },
            { new: true }
        );
        res.status(200).json({ message: "Parking data updated successfully", parking: updatedParking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// DELETE parking data
Parking.delete("/delete/:id", async (req, res) => {
    try {
        await parkingModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Parking data deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// POST add parking data
Parking.post("/add", async (req, res) => {
    try {
        const { name, area, distance, status } = req.body;
        const newParking = new parkingModel({ name, area, distance, status });
        await newParking.save();
        res.status(200).json({ message: "Parking data added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
Parking.put("/book/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedParking = await parkingModel.findByIdAndUpdate(
            id,
            { status: "Booked" },
            { new: true }
        );
        if (!updatedParking) {
            return res.status(404).json({ message: "Parking slot not found" });
        }
        res.status(200).json({ message: "Parking slot booked successfully", parking: updatedParking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
Parking.put("/unbook/:id", async (req, res) => {
    try {
        const { id } = req.params;
        // Update the status of the parking slot to 'Available'
        const updatedParking = await parkingModel.findByIdAndUpdate(
            id,
            { status: "Available" },
            { new: true }
        );
        if (!updatedParking) {
            return res.status(404).json({ message: "Parking slot not found" });
        }
        res.status(200).json({ message: "Parking slot unbooked successfully", parking: updatedParking });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = Parking;
