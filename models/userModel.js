const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const userSchema=new mongoose.Schema({
      name:{
        type:String,
        required:[true,"name is required"]
      },
      email:
      {
        type:String,
        required:[true,"email is required"]
      },
      password:{
      type:String,
     required:[true,"name is required"]
    }
})

    userSchema.pre("save",async function(next){
        if(!this.isModified("password")){
            return next()
        }
        const salt=await bcrypt.genSalt(10);
        this.password=await bcrypt.hash(this.password,salt);
        next()
    });

    const User=new mongoose.model('User',userSchema)
    module.exports = User;