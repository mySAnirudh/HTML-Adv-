// First we are installing Express jS via terminal 

const exoress=require('express');
const app=exoress();

app.get('',(req,resp)=>{ // In this having two parameters 1/Request 2/Response 
   resp.send('Hello, this is Home Page ');
}) ;// get is a methods it's provide routs 

app.get('/Profile',(req,resp)=>{
    resp.send('Hello, this is Profile Page ');
}) ;

app.get('/About',(req,resp)=>{
    resp.send('Hello, this is Abut US Page ');
}) ;

app.get('/Profile',(req,resp)=>{
    resp.send('Hello, this is Profile Page ');
}) ;

app.listen(5000);

//USE (nodemoon .\index.js) Use the command to auto update then 
// THen write in browser localhost:5000 
// Then also for other write (localhost:5000/Anout )
// For another things 
