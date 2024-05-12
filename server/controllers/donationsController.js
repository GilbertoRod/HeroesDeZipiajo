const DonationModel = require('../models/donationsModel');
const getDonations = async (req, res) => {
    try {
        const year = req.params.year;
        const donations = await DonationModel.find({ year: year });
        
        res.send(donations);
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
};


const deleteDonation = async(req,res)=>{
    try{
        const id=req.params.id;
        await DonationModel.findByIdAndDelete(id);
        res.send("Successfully Deleted Entry");
    }
    catch(error){
        res.status(500).send({ error: 'Internal Server Error' });
    }
};


const updateDonation = async(req,res)=>{
    const id=req.params.id;
    const data=req.body.data;
    
    await DonationModel.findByIdAndUpdate(id,{donations:data});
    res.send("Successfully Updated Entry");

}


const createDonationEntry = async(req,res)=>{
    const name = req.body.name
    const year = req.body.year
    const donation= new DonationModel({
        name:name,
        year:year,
        donations:[
            {month:"January", amount:0},
            {month:"February", amount:0},
            {month:"March", amount:0},
            {month:"April", amount:0},
            {month:"May", amount:0},
            {month:"June", amount:0},
            {month:"July", amount:0},
            {month:"August", amount:0},
            {month:"September", amount:0},
            {month:"October", amount:0},
            {month:"November", amount:0},
            {month:"December", amount:0}
        ]
    });
    await donation.save();
    res.send(donation);
}









module.exports={getDonations,deleteDonation,updateDonation,createDonationEntry}