// Packeages
const express = require('express');
const app = express();
require("./db/conn");
const Student = require("./models/students");
// Port
const port = process.env.PORT || 8050;

//################ Middleware ################

/*express.json() is a method inbuilt in express to 
recognize the incoming Request Object as a JSON Object. 
This method is called as a middleware in your application 
using the code: app.use(express.json());*/

app.use(express.json());

// Routing
app.get("/",(req,res)=>{
    res.send(" RESTFul API");
});

app.post("/Students",(req,res)=>{
    // console.log(req.body);
    const user = new Student(req.body);
    user.save().then(() => {
        res.status(201).send(user);
    }).catch((err) => {
        res.status(400).send(err);
        console.log(err);
    });
});

app.get("*",(req,res)=>{
    res.send("<h1 style='color:red;'>404 Error Page not Found !!!</h1>")
});

app.listen(port,()=>{
    console.log(`Your app is listen on http//localhost:${port}`);
})