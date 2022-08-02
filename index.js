// Here we are showing Render data 

const express=require('express');
const app=express();

app.get("",(req,res)=>{
    res.send(<h1>Welcome ,this is Home Page<h1>
        <a href="/about"> Go to the About Page</a>);

});
app.get("/about",(req,res)=>{
    res.send(
      <input type="text" placeholder="User name"/>
      <button>Click ME</button>
    );    
    });

app.get("/help",(req,res)=>{
    res.send([
        {
            name:"Samrat",
            email:"Rostingadda@gmail.com"
        },
        {
            name:"SamratbSingh",
            email:"Rostingadda@outlook.com"
        }
    ]);
});

app.listen(4000);