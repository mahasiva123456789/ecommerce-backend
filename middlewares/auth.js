const jwt=require('jsonwebtoken')

const auth=async(req,res,next)=>{
    const token=req.header('Authorization').split(" ")[1];

    if(!token)
    {
       return res.status(404).json({error:"no token,authorization denied"})
    }

    try{
        const decoded=jwt.verify(token,'secret_token');
        req.user=decoded;
        console.log(req.user)
        next();
    }
    catch(err)
    {
        return res.status(400).json({error:"invalid token"})
    }
};
module.exports=auth