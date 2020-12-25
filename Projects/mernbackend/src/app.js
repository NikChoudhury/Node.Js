const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs');
require('dotenv').config();
require('./db/conn');

// ###### PORT ######
const port = process.env.PORT || 8080;

// ###### Path ######
const static_path = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

// ###### Set Hbs Engine ######
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(static_path));

// ###### Routers ######
app.get("/",(req,res)=>{
    res.render("index");
});

// ###### Listen ######
app.listen(port,()=>{
    console.log(`App is running on http://localhost:${port}`);
});
