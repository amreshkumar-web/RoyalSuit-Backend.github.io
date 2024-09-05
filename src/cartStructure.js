const mongoose = require("mongoose");

const cartData = new mongoose.Schema({
   email:String,
   products:[String]
},{collection:"cart"});

module.exports=mongoose.model('cart',cartData);