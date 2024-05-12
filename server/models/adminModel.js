const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require("validator");
const adminSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

//static signup method
//We create our own methods associated with the model
adminSchema.statics.signup = async function(username,email,password){

    //validation
    //Checks if the request doesn't contain a useername, email, or password
    if (!username||!email||!password){
        throw new Error("All fields must be filled!");
    }
    //Checks if an email is valid.
    if (!validator.isEmail(email)){
        throw new Error("Email is not valid!")
    }
    //checks if email already exists
    const exists = await this.findOne({email})
    if (exists){
        throw new Error('Email already in use');
    }

    //checks if username already exists
    const userExists = await this.findOne({username})
    if (userExists){
        throw new Error('Username already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt)
    const user = await this.create({username,email,password:hash})
    return user

    

}




adminSchema.statics.login= async function(username,password){
    if (!username||!password){
        throw Error("All fields must be filled!!");
    }

    const user = await this.findOne({username});
    if (!user){
        throw Error('Incorrect Username' );
    }
    const match = await bcrypt.compare(password,user.password);
    if (!match){
        throw Error('Incorrect Username or Password!' );
    }

    return user
}
const AdminModel=mongoose.model("Admin",adminSchema);
module.exports = AdminModel