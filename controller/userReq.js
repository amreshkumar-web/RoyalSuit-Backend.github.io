const lgreq = require("../routes/userReq");
const encrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const privateKey = "amresh@9835";
const putData = require("../src/dbStructure");
const path=require("path")
const route=require('../routes/userReq')
const  addcart = require("../src/cartStructure")
const putProfile = require("../src/profileStructure")

const singup = async (req, resp) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await putData.findOne({ email: email });
    if (existingUser) {
      return resp.status(400).json({ message: "user already exist" });
    }
    const hashpassword = await encrypt.hash(password, 10);
    const result = await putData.create({
      name: name,
      email: email,
      password: hashpassword,
    });
    const result2 = await addcart.create({
      email:email,
      products:[]
    });
    const result3 =await putProfile.create({
      Name:name,
      email:email
    })
    const token = jwt.sign({ email: result.email, id: result._id }, privateKey);
    return resp.status(201).json({ user: result, token:`Bearer ${token}` , message:"Account Created" });
  } catch (error) {
    console.log(error);
    return resp.status(500).json({ message: "user already exist" });
  }
};




const singin = async (req, resp) => {
  const {email, password } = req.body;
  if(email==="" || password===""){
    return resp.status(400).json({message:"Username and Password can not be empty"});
  }
  try {  
    const checkUser = await putData.findOne({ email: email });
    if (!checkUser) {
      resp.status(404).redirect("../src/index.js");
      return resp.status(404).json({ message: "user not found" });
    }
    
    const verify = await encrypt.compare(password,checkUser.password);
    if(!verify){
        return resp.status(400).json({ message: "invalid password" });
    }

    const token = jwt.sign({email:checkUser.email , id:checkUser._id},privateKey);
      resp.status(200).json({user:checkUser, token:`Bearer ${token}`});
  } catch (error) {
    console.log(error);
    resp.status(500).json({message:"something went wrong"})
  }
};


const redirectMain = (req,resp) =>{
    resp.status(200).json({loginRequired:'../'});
}

module.exports = { singin, singup ,redirectMain};
