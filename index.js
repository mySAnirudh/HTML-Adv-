const http =require('http');
const { json } = require('stream/consumers');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify({name:'Samrat Singh', email:'mynsamrat@gmail.com'}));
    resp.end();
}).listen(5002); // It's start after run in cmd "nodemon start " this cammand 
// Then run in broser then it's show the output 


// RUN in Thunder Client by this code in Get method :- http://localhost:5000
// Don't use https 