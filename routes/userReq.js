const express=require('express');
const { singup, singin , redirectMain} = require('../controller/userReq');
const auth = require('../middlewares/auth');
const router = express.Router();
const path=require("path")

router.post("/register",singup);
router.post("/login",singin);
router.get("/mainpage",auth,redirectMain)
module.exports = router;