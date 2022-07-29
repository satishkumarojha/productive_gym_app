const mongoose=require("mongoose")
const bcrypt=require("bcrypt");


const Authschema=mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
    
},{
    versionKey:false,
    timestamp:true
})

Authschema.pre("save",function(next){
    const hash=bcrypt.hashSync(this.password,5)
    this.password=hash;
    return next()
})
  

Authschema.methods.checkPassword=function(password){
    return bcrypt.compareSync(password,this.password)
}





const UserAuth=mongoose.model("Auths",Authschema)

module.exports=UserAuth