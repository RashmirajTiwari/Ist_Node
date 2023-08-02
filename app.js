const http=require('http');
const fs=require('fs');
const path = require('path');

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

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    const filePath=path.join(__dirname,"message.txt")
    if (url === '/') {
      
      fs.readFile(filePath,{encoding:'utf-8'},(err,data)=>{
        console.log(data);
        res.write('<html>');
        res.write(`<body>${data}</body>`)
      res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
      res.write('</html>');
      return res.end();
    } ); 
    }
    else if (url === '/message' && method === 'POST') {
      const body = [];
      req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });
     return req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt', message);
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
      
    }else{
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title><head>');
        res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
        res.write('</html>');
        res.end();
    }
    
  });
  
  server.listen(5000);