//const http=require('http');
// const routes=require('./routes.js');


// http.createServer((req,res)=>{
//     res.write("<h1>Rashmiraj</h1>");
//     res.end();
// }).listen(4000);

// http.createServer((req,res)=>{
//     const url=req.url;
//     if(url==="/home"){
//     res.write("<h1>Welcome to home page</h1>");
//     res.end();
//     }else if(url==="/about"){
//         res.write("<h1>Welcome to About us page</h1>");
//         res.end();
//     }else if(url==="/node"){
//         res.write("<h1>Welcome to node js project</h1>");
//         res.end();
//     }else{
//         res.write("<h1>Invalid url</h1>");
//         res.end();
//     }
//     res.end();
     
// }).listen(4000);

// console.log(routes.someText);
// const server = http.createServer(routes.handler);
// server.listen(5000);


//exprss.js;

const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:false}))
// app.use((req,res,next)=>{
//     console.log("In the middleware");
//     next();
// });
// app.use((req,res,next)=>{
//     console.log("In the another middleware");
//     res.send({key:"value"});
// });

app.use('/',(req,res,next)=>{
    console.log("this is run always");
    next();
});
app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add product</button></form>');
    console.log("In the middleware");
});
app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
    
});
app.use('/',(req,res,next)=>{
    console.log("In the another middleware");
    res.send("<h2>Hello Express</h2>");

});
app.listen(5000);