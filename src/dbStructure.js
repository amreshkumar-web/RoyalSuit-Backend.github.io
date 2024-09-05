const mongoose=require("mongoose");

const putData = new mongoose.Schema({
    name:String,
    email:String,
    password:String
},{collection:'Users'});

module.exports = mongoose.model('Users',putData);





