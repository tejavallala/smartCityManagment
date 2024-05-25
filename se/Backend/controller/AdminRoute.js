const express = require("express");
const adminSchema = require("../Model/AdminModel");

const adminRoute = express.Router();

// Route to create an admin
adminRoute.post("/create-admin", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await adminSchema.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const newAdmin = await adminSchema.create({ name, email, password });
        res.status(200).json(newAdmin);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Route to login as an admin
adminRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const admin = await adminSchema.findOne({ email });

        if (!admin) {
            return res.status(404).json({ error: "Admin not found" });
        }

        // Validate password
        if (admin.password !== password) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        // Return admin name
        res.status(200).json({ name: admin.name });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



module.exports = adminRoute;
