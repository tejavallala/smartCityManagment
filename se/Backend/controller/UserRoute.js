const express = require("express");
const UserModel = require("../Model/UserModel");
const User = express.Router();

User.post("/register", async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phoneNumber, city, address } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }

        const newUser = new UserModel({
            name,
            email,
            password,
            confirmPassword,
            phoneNumber,
            city,
            address
        });

        await newUser.save();

        res.status(200).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

User.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (user.password !== password) {
            return res.status(401).json({ error: "Incorrect password" });
        }

        res.status(200).json({ name: user.name });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = User;
