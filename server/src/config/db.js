const mongoose=require("mongoose")

const connectdb=()=>{
  return  mongoose.connect("mongodb+srv://hackathon:123hackathon@cluster0.nlyfouj.mongodb.net/hack")
}
 


module.exports=connectdb;