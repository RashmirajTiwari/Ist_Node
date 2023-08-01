const http=require('http');

// http.createServer((req,res)=>{
//     res.write("<h1>Rashmiraj</h1>");
//     res.end();
// }).listen(4000);

http.createServer((req,res)=>{
    const url=req.url;
    if(url==="/home"){
    res.write("<h1>Welcome to home page</h1>");
    res.end();
    }else if(url==="/about"){
        res.write("<h1>Welcome to About us page</h1>");
        res.end();
    }else if(url==="/node"){
        res.write("<h1>Welcome to node js project</h1>");
        res.end();
    }else{
        res.write("<h1>Invalid url</h1>");
        res.end();
    }
    res.end();
     
}).listen(4000);