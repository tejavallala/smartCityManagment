const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    confirmPassword: { type: String },
    phoneNumber:{type:String},
    city:{type:String},
    address:{type:String}
}, {
    collection: "user"
});

module.exports = mongoose.model("User", userSchema);
