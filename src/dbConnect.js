const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/Heritage",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("connected")
}).catch((e)=>{
    console.log("Not connected psl check")
})