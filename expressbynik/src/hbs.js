
const path = require('path');
const express = require('express');
const app = express();
const port = 8080;


// Geting Path of public Folder
// console.log(__dirname);
// console.log(path.join(__dirname,"../public"))

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates");




// Using hbs as the default view engine requires just one line of code in your app setup. This will render .hbs files when res.render is called.
app.set("view engine", "hbs");
app.set("views", templatePath);


app.get("/", (req, res)=>{
    res.render("index",{
        myName: "Niku" //This is an Object
    });
   
});

app.get("/about", (req, res)=>{
    res.render("about");
   
});



// app.get(route, callback)
app.get("/",(req, res)=>{
    res.send("<h1>Hello Form the Express Side !!! </h1>");
});
app.get("/about",(req, res)=>{
    res.send("<h1>Hello Form the about Side !!! </h1>");
});



app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`)
})