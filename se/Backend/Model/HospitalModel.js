const mongoose= require("mongoose");
const HospitalSchema= new mongoose.Schema({
    patientName:{type:String},
    AppointmentDate:{type:Date},
    AppointmentTime:{String},
    Problem:{type:String}
},{
    collection:"Hospital"
});
module.exports=mongoose.model("Hospital",HospitalSchema);