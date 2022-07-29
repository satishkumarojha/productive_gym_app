const express=require("express")

const Product=require("../model/productivity.model");

const router = express.Router();

router.get("/",async(req,res)=>{
   try{
    const productdata=await Product.find({}).lean().exec()
    return res.status(200).send(productdata)
   }catch(err){
    return res.status(500).send({message:"something went wrong"})
   }
})


router.post("/",async(req,res)=>{
    try{
        const productdata=await Product.create(req.body)
        return res.status(201).send(productdata)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})


router.get("/:id",async(req,res)=>{
    try{
        const product=await Product.findById(req.params.id).lean().exec()
        return res.status(200).send(product)
    }catch(err){
        return res.status(500).send({message:err.message})
    }
})

router.patch("/:id",async(req,res)=>{
       try{
           const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()
   
           return res.status(200).send(product)
   
       }catch(err){
           return res.status(500).send({message:err.message})
       }
   });
   
   router.delete("/:id",async(req,res)=>{
       try{
           const product=await Product.findByIdAndDelete(req.params.id).lean().exec()
   
           return res.status(200).send(product)
   
       }catch(err){
           return res.status(500).send({message:err.message})
       }
   });



module.exports=router;











