const mongoose = require("mongoose");



const orders = mongoose.Schema({
    orderProductsID:[[String]], 
    email:String
},{collection:"order"})



