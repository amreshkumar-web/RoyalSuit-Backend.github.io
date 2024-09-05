const putProfile=require("../src/profileStructure")


const addData = async (req,resp) => {
    const {email,Gender,Address,PhoneNumber}=req.body;
     try {
      const data = await putProfile.create({
         email:email,
         Gender:Gender,
         Address:Address,
         Phone_number:PhoneNumber
      })
 
      const result=data.save();
      resp.status(201).json({created:data});
     } catch (error) {
      console.log(error);
      resp.status(400).json({message:"something went wrong"});
     }
}


const updateData = async (req,resp) =>{
    const{name,gender,address/* ,PhoneNumber */}=req.body;
    console.log(name,gender,address);
   try {
    const dataUpdate= await putProfile.updateMany({email:req.userEmail},
        {
         $set:{
            Name:name,
         Gender:gender,
         Address:address
        /*  Phone_number:PhoneNumber */
         }
        }
     )
     resp.status(200).json({updatedData:dataUpdate})
   } catch (error) {
    console.log(error);
    resp.status(400).json({message:"Something went wrong"})
   }
}



const deleteData = async (req,resp) =>{
   const {email} = req.body;
   try {
      const data=await putProfile.deleteMany({email:email})
      resp.status(200).json({message:"Data Deleted"});
   } catch (error) {
      console.log(error)
      resp.status(400).json({message:"somnething went wrong"});
   }
}




const getData = async (req,resp) =>{
   const {email} = req.body;
   try {
      const data = await putProfile.findOne({email:req.userEmail});
   resp.status(200).json({Name:data.Name,Email:data.email,Address:data.Address,Gender:data.Gender});
   } catch (error) {
      console.log(error);
      resp.status(400).json({message:"something went wrong"});
   }
}

module.exports={addData,updateData,deleteData,getData}