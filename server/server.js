require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRoutes=require('./routes/admin')
const donationRoutes=require('./routes/donations');

const app=express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO);


app.use('/admin',adminRoutes);

app.use('/donations',donationRoutes);

app.listen(process.env.PORT,()=>{
    console.log("You're connected")
});