
const express=require('express');
const router=express.Router();
const controllerContactUs=require('../controllers/contactUs');
router.get('/contactUs',controllerContactUs.getContactUs);
module.exports=router;