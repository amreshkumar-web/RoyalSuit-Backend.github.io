
const { response } = require('express');
const cartData=require('../src/cartStructure');
const productData=require('../src/productStructure')


const addCart = async (req,resp) =>{
   
    try {
      let update=false
        const cartCheck=await cartData.findOne({email:req.userEmail})
        console.log(cartCheck)

       let[id,count]=[]
       
        for(let i=0;i<cartCheck.products.length;i++){
           [id,count]=cartCheck.products[i].split("_");
           if(id === req.params.id){
            count= parseInt(count,10);
            ++count;
            const dataValue = await cartData.updateOne({email:req.userEmail},
                { $set: { [`products.${i}`]: `${req.params.id}_${count.toString()}` } }
            )
            update=true;
            resp.status(200).json({message:"Product is added to cart",id:req.params.id,count:count});
           }
        }
    

       if(!update){
        const data = await cartData.updateOne({email:req.userEmail},
            {$push : {products:req.params.id +"_"+ "1"}}
        )
        resp.status(200).json({message:"Product is added to cart",id:req.params.id,count:0});
       }
   

    } catch (error) {
        console.log(error + "hello");
    }
}










const getCartProduct = async (req,resp) =>{
    try {
        const cartCheck=await cartData.findOne({email:req.userEmail})
  if(!cartCheck){
    resp.status(404).json({message:"No cart found for this user"});
  }
 const allData = []
  let[id,count]=[]
       
        for(let i = cartCheck.products.length - 1; i >= 0; i--){
           [id,count]=cartCheck.products[i].split("_");
           
           const dataP= await productData.findOne({productID:id});
           console.log(dataP)
           if(dataP){
            allData.push({dataP,count})
           }
        }
        if(allData.length >0){
            resp.status(200).json(allData);
        }
        else{
            resp.status(404).json({message:"no product fount in cart"})
        }
         
        
    } catch (error) {
        console.log(error);
    }
}













const cartDelete = async (req,resp) =>{
    try {
         let Did=req.params.id;
        const data= await cartData.findOne({email:req.userEmail})
        console.log(data + "yaha tk")
        if(data){
            let index = data.products.indexOf(Did);
             data.products.splice(index,1);
             console.log(data.products + "yaha tk product slice")
           const dataSave = await data.save();
             resp.status(200).json({message:"data has been saved"})
        }
        else{
            resp.status(400).json({message:"oops Something went wrong"});
        }

    } catch (error) {
        console.log(error);
    }
}







const getAllProducts = async (req,resp) =>{
    try {
        const data = await productData.find();
        resp.status(200).json({data});
    } catch (error) {
        console.log(error)
    }
}





module.exports = {addCart , getCartProduct ,cartDelete,getAllProducts};