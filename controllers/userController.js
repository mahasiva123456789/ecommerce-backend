const User=require('../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require("jsonwebtoken")
exports.createuser=async(req,res)=>
{
    const {name,email,password}=req.body;
    const user=new User({
        name,
        email,
        password,
    })
    try {
        await user.save();
        res.status(201).json({message:"user created successfully"})
    }
    catch(err){
     console.log(err);
     res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.login=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await User.findOne({email});
        if(!user){
            return res.status(404).json({error:"user not found"})
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch)
        {
            return res.status(400).json({error:"password is incorrect"});    
        }
        const token=jwt.sign({user_id:user._id},"secret_token",{
            expiresIn:"1h"
        });
        res.status(200).json(token)
    }
    catch(err)
    {
        console.log(err);
    }
}