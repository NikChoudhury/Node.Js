
const path = require('path');
const express = require('express');
const app = express();
const port = 8080;
const hbs = require('hbs');


// Geting Path of public Folder
// console.log(__dirname);
// console.log(path.join(__dirname,"../public"))

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");




// Using hbs as the default view engine requires just one line of code in your app setup. This will render .hbs files when res.render is called.
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.use(express.static(staticPath));

// app.get(route, callback)


app.get("/", (req, res)=>{
    res.render("index",{
        myName: "Niku Mani" //This is an Object
    });
   
});

app.get("/about", (req, res)=>{
    res.render("about",{
        myName: "Niku Mani" //This is an Object
    });
   
});


app.get("/about/*",(req,res)=>{    //Unversal-oparator "*"
    res.render("404",{
        myName: "Niku Mani",
        errorcomment:"Opps...This about Page is Not Found !!"
    });
})


app.get("*",(req,res)=>{    //Unversal-oparator "*"
    res.render("404",{
        myName: "Niku Mani",
        errorcomment:"Opps... This Page is Not Found !!"
    });
})



app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`)
})
