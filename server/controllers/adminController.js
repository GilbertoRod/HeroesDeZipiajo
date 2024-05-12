const AdminModel=require('../models/adminModel');
const jwt = require('jsonwebtoken')


const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET, {expiresIn:'365d'});
}


//login user
const loginAdmin=async(req,res)=>{
    const {username,password}=req.body;
    try{
        const user = await AdminModel.login(username,password);
        //create a token
        const token = createToken(user._id);
        res.status(200).json({username,token});
        console.log("hi status")

    }catch(err){
        res.status(400).json({error:err.message});
    }

}



//signup user
const signupAdmin=async(req,res)=>{
    const {username,email,password}=req.body;
    try{
        const createdUser = await AdminModel.signup(username,email,password);
        res.status(200).json({msg:'User Created',user:createdUser});
    }
    catch(err){
        res.status(400).json({error:err.message});
    }
    
}

module.exports={loginAdmin,signupAdmin}