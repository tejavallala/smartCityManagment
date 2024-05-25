const express = require('express');
const cors = require('cors');
const mongoose=require("mongoose");
const userRoute = require('./controller/UserRoute');
const adminRoute = require('./controller/AdminRoute');
const bodyParser = require('body-parser');
const ParkingRoute=require('./controller/ParkingRoute');
const bookingRoute=require('./controller/BookingRoute');
const hospitalRoute=require('./controller/HospitalRoute');

const app = express();
mongoose.set("strictQuery",true);
mongoose.connect("mongodb+srv://user:123@cluster0.03nkw8g.mongodb.net/scms");
var db=mongoose.connection;
db.on("open",()=>console.log("connected to db"));
db.on("error",()=>console.log("Error occured"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/userRoute', userRoute);
app.use('/adminRoute', adminRoute);
app.use('/parking',ParkingRoute);
app.use('/booking',bookingRoute);
app.use('/hospital',hospitalRoute);
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});