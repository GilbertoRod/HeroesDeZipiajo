const express = require('express');
const { loginAdmin,signupAdmin } = require('../controllers/adminController');
const router = express.Router()


//Both are post requests because the client is sending their info to the server

router.post('/login',loginAdmin);
router.post('/signup',signupAdmin);



module.exports=router;