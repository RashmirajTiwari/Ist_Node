const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))


const loginRoutes=require('./login');

app.use(loginRoutes);
// app.use((req,res,next)=>{
//     res.status(404).send("<h1>Page Not Found</h1>");
// });


app.listen(3000);