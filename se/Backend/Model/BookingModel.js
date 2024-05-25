const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    name: { type: String },
    Date: { type: Date },
    InDate: { type: Date },
    OutDate: { type: Date },
    InTime: { type: String },
    OutTime: { type: String }
}, {
    collection: "Booking"
});
module.exports = mongoose.model("Booking", bookingSchema);
