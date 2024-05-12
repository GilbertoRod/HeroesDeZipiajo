const mongoose=require("mongoose");
const DonationSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
      },
      year:{
        type:Number,
        required:true
      },
    
      donations:[
        {
    
          month:{
            type:String,
            required:true
          },
    
          amount:{
            type:Number,
            required:true
          }
        }
      ]
    })
    
    //passes the Donations Schema to the friends collection in MongoDB
    const DonationModel = mongoose.model('donations',DonationSchema)
    
    module.exports = DonationModel;