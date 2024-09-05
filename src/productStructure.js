const mongoose = require("mongoose");

const productData = new mongoose.Schema({
    productID:String,
    productName:String,
    productDescription:String,
    productPrice:Number,
    productImageName:String,
    productColour:String,
    productType:String,
    productMrp:Number,
    productRating:Number
},{collection:"Products"});

module.exports=mongoose.model('Products',productData);