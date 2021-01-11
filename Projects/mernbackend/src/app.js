const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
require('dotenv').config();
require('./db/conn');
const Register = require("./models/register");

// ###### PORT ######
const port = process.env.PORT || 8080;

//Router
const router = require("./routers/router");

// ###### Path ######
const static_path = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");


// ###### To Get Form Data ######
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
 
// parse application/json
app.use(express.json());

// ###### Set Hbs Engine ######
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(static_path));

// Express Session Middleware
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  }));
// connect-flash
app.use(flash());
// Routers
app.use(router);


// ###### Listen ######
app.listen(port,()=>{
    console.log(`App is running on http://localhost:${port}`);
});
