const jwt = require("jsonwebtoken")
const UserAuth = require("../model/Auth.model");

//const express=require("express")
const newtoken=(userAuth)=>{
    return jwt.sign({userAuth},"productivie")
}

const register=async(req,res)=>{
    try{
         let userAuth= await UserAuth.findOne({email:req.body.email})
       
       if(userAuth){
        return res.status(400).send({message:"Email already Exist"})
       }
       userAuth=await UserAuth.create(req.body)
        
       const token=newtoken(userAuth)
       return res.status(200).send({userAuth,token})

    }catch(err){
        return res.status(500).send({message:err.message})
    }

}










const login=async (req,res)=>{

  try{
    const userAuth= await UserAuth.findOne({email:req.body.email})
    if(!userAuth){
       return res.status(400).send("SignUp first")
    }

    const match=userAuth.checkPassword(req.body.password)
    if(!match){  
        return res.status(400).send({message:"wrong Email or Password"}) 
     }
     const token= newtoken(userAuth)
     return res.status(200).send({userAuth,token})
  }catch(err){
    return res.status(500).send({message:err.message})
  }
}





module.exports={register,login}