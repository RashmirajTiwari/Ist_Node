const http=require('http');

http.createServer((req,res)=>{
    res.write("<h1>Rashmiraj</h1>");
    res.end();
}).listen(4000);