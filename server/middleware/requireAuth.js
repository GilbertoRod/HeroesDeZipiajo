const jwt=require('jsonwebtoken');
const User=require('../models/adminModel')
const requireAuth=async(req,res,next)=>{
    
    const {auth} = req.headers

    if(!auth){
        
        return res.status(401).json({error:"Must Login to access this page"})
    }
    const token = auth.split(' ')[1];

    try{
        
        const {_id} = jwt.verify(token,process.env.SECRET);


        req.user = await User.findOne({_id}).select('_id');

        next();

    }catch(e){
        res.status(401).json({error:"Must Login to access this page"})
    }
}
module.exports=requireAuth