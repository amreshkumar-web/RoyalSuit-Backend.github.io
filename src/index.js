const express = require("express");
require("./dbConnect");
const putData = require("./dbStructure");
const app = express();
app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 1600;
const lsreq = require("../routes/userReq");
const addCartProduct = require("../routes/addToCart");
const profileData = require("../routes/userCURD");
const auth = require("../middlewares/auth");
const { Script } = require("vm");
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));
app.use(bodyParser.urlencoded({ extended: true }));

console.log(__dirname + "Amresh")






/* for registration ------------------------------------------------*/
app.use("/routes", lsreq);
app.use("/crud", profileData);
app.use("/addToCart" , addCartProduct)

/* app.post("/registor", async (req,resp) => {

const {name,email,password} =req.body;
let isValid=false;

if(name.length!==0 && email.length>=3 && password.length>6){
    isValid=true;
}
else{
    const errorField ={
        Note:"Pls make sure name field in not empty",
        Note:"Pls make sure email field is not empty",
        Note:"Pls make sure password length must be greater then 6"
    }
    resp.json(errorField);
}

const checkUsername=await putData.findOne({email:email});

if(isValid && !checkUsername){
    const data=new putData({
        name:name,
        email:email,
        password:password
      })
      const result = await data.save();
      const status={
        Message:"Succesful Registered"
      }
      resp.status(200).json(status);
}
else{
    const errorData = {
        Message: "Failed",
    };
    resp.status(400).json(errorData);
}





})

app.get("/registrationDone" , (req,resp) => {
    resp.sendFile(path.join(__dirname,"../public/registrationDone.html"));
}) */
/* end registration----------------------- */

/* app.post('/login', async (req,resp) =>{
    const {loginusername,loginpassword}=req.body;
    /* console.log(loginusername+ "username");
    console.log(loginpassword+ "password"); */

/*  const data= await putData.find({email:loginusername,password:loginpassword});
    console.log(data);
    if(data.length > 0){
        const token=lasknndalsdnoahdaskdansoasncahcoiashcwqidjlkndlasosi;
        resp.redirect("/mainpage"); 
    }
    else{
        resp.send("<script>alert('pls enter valid username or password')</script>")
    }
})
  */

app.listen(port, () => {
  console.log(`port is working on ${port}`);
});
