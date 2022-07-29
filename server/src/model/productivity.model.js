const mongoose=require("mongoose")



const Productschema=mongoose.Schema({
    Exercise_list:Array
},
{
    versionKey:false,
    timestamp:true
})



const Product=mongoose.model("productivity",Productschema)

module.exports=Product