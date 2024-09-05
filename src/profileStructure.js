const mongoose=require("mongoose");
const { type } = require("os");

const putProfile = new mongoose.Schema({
    Name:String,
    email:{
        type:String,
        immutable:true
    },
    Gender:String,
    Address:String,
    Phone_number:Number
},{collection:"mainData"})

module.exports=mongoose.model('mainData',putProfile);