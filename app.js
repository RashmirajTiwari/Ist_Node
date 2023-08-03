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
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
// app.use((req,res,next)=>{
//     console.log("In the middleware");
//     next();
// });
// app.use((req,res,next)=>{
//     console.log("In the another middleware");
//     res.send({key:"value"});
// });

const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
app.use(shopRoutes);
app.use(adminRoutes);
app.use((req,res,next)=>{
    res.status(404).send("<h1>Page Not Found</h1>");
});


app.listen(5000);