const mongoose=require("mongoose");
const parkingSchema= new mongoose.Schema({
    "name":{type:String},
    "area":{type:String},
    "distance":{type:String},
    "status":{type:String}
},{
    collection:"parking"
});
module.exports=mongoose.model("parkingSchema",parkingSchema);