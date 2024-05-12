const express = require('express');
const requireAuth = require('../middleware/requireAuth');
const { getDonations, deleteDonation, updateDonation, createDonationEntry } = require('../controllers/donationsController');

const router = express.Router()


router.get('/donors/:year',getDonations);

router.use(requireAuth);

router.delete('/removeEntry/:id',deleteDonation);

router.put('/updateEntry/:id',updateDonation);

router.post('/addDonation',createDonationEntry);





module.exports=router;