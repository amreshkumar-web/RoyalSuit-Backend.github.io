const express=require('express');
const { addData,updateData, deleteData, getData} = require('../controller/userCURD');
const auth = require('../middlewares/auth');
const router = express.Router();
const path=require("path")


router.post("/addData",auth,addData);
router.put("/updateData",auth,updateData);
router.delete("/deleteData",auth,deleteData);
router.get("/getData", auth ,getData);


module.exports=router;