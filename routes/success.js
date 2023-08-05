const path=require('path');
const express=require('express');
const router=express.Router();

router.post('/success',(req,res,next)=>{
    
    res.sendFile(path.join(__dirname,'../','views','success.html'))

});
module.exports=router;