
const express=require('express');
const router=express.Router();
const fs=require('fs');



router.get('/login',(req,res,next)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/" method="GET"><input type="text" name="username" id="username"><button type="submit">Login</button></form>');
    console.log("In the login Form");
});

router.get('/',(req,res,next)=>{

   fs.readFile("username.txt",(err,data)=>{
    if(err){
        console.log(err);
        data="NO Chat Exists";
    }
    res.send(
        `${data}
        <form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')"><input type="hidden" id="username" name="username"><input type="text" name="message"><button type="submit">send</button></form>`
        );
   })
   
});
router.post('/',(req,res,next)=>{

   
    console.log("My name is "+req.body.username)
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
        err?console.log(err):res.redirect("/");
    })
    console.log("In the Send Form");
    console.log("this is"+req.body.username);
    console.log(req.body.message);


   
    //console.log(req.body.username)
    //res.redirect('/');
});


module.exports=router;