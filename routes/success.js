
const express=require('express');
const router=express.Router();
const controllerSuccess=require('../controllers/success');

router.post('/success',controllerSuccess.getSuccess);
module.exports=router;