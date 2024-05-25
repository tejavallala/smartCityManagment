const express = require("express");
const Hospital = require("../Model/HospitalModel");
const hospital = express.Router();

hospital.post("/add", async (req, res) => {
    try {
        const { patientName, AppointmentDate, AppointmentTime, Problem } = req.body;
        const newHospital = new Hospital({ patientName, AppointmentDate, AppointmentTime, Problem });
        await newHospital.save();
        res.status(200).json({ message: "Appointment added successfully" });
    } catch (error) {
        console.error("Error adding appointment:", error);
        res.status(500).json({ message: "Failed to add appointment" });
    }
});

hospital.get("/", async (req, res) => {
    try {
        const appointments = await Hospital.find();
        res.status(200).json(appointments);
    } catch (error) {
        console.error("Error fetching appointments:", error);
        res.status(500).json({ message: "Failed to fetch appointments" });
    }
});

module.exports = hospital;
