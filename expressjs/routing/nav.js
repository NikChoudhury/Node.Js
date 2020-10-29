const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    res.write("<h1>Hello From the Home Page</h1>");
    res.write("<h1>Hello From the Home Page Again</h1>");
    res.send();

});

app.get('/about',(req,res)=>{
    res.status(200).send("<h1>Hello From the About</h1>");
});

app.get('/contact',(req,res)=>{
    res.send("<h1>Hello From the Contact Page</h1>");
});

app.get('/temp',(req,res)=>{
    res.send([{
        id:1,
        name:"Nik"
    },{
        id:2,
        name: "Niku"
    }]);
});

app.get('/json',(req,res)=>{
    res.json([{
        id:1,
        name:"Nik"
    },{
        id:2,
        name: "Niku"
    },{
        id:3,
        name: "Choudhury" 
    }]);
});

app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`);
});