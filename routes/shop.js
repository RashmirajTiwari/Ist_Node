const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
    console.log("In the another middleware");
    res.send("<h2>Hello Express</h2>");

});
module.exports=router;