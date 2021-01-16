const express = require("express");
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const router = new express.Router();
const Register = require("../models/register");
const auth = require("../middleware/auth");
// ###### Routers ######

// Navbar Route
router.get("/",(req,res)=>{
    res.render("index");
});
router.get("/survices",(req,res)=>{
    res.render("survices");
});
router.get("/SourceCode",(req,res)=>{
    res.render("survices");
});
router.get("/Contect",(req,res)=>{
    res.render("survices");
});
router.get("/About",(req,res)=>{
    res.render("survices");
});

// Work Route
router.get("/register",(req,res)=>{
    res.render("register");
});

router.get("/signin",(req,res)=>{
    res.render("signin");
});

router.get("/secret", auth, (req,res)=>{
    const user = req.user;
    res.render("secret",{
        userdata: user
    });
});

// ERROR Formatter
const errHandle = (e) => {
    let errors = {};
    const allErrors = e.substring(e.indexOf(":") + 1).trim();
    const allErrorsInArrayFormat = allErrors
      .split(",")
      .map((err) => err.trim());
    allErrorsInArrayFormat.forEach((error) => {
      const [key, value] = error.split(":").map((err) => err.trim());
      errors[key] = value;
    });
    return errors;
};


// Create a New User 
router.post("/register",async(req,res)=>{
    try {
        const pass = req.body.pass;
        const cpass = req.body.cpass;
        if (pass!=cpass) {
            res.status(200).render("register",{
                otherErr:"Password are Not Matching !!"
            })
        }else{
            const registerUser = new Register({
                firstname:req.body.fname,
                lastname:req.body.lname,
                email:req.body.email,
                gender:req.body.gender,
                password:req.body.pass,
                confirmpassword:req.body.cpass
            });

        //  Midleware For JWT OAuth 
        const token = await registerUser.generateOAuthToken();
        // Cookies
        res.cookie("mybiscuit",token,{
            httpOnly:true,
            expires: new Date(Date.now() + 8 * 3600000), // cookie will be removed after 8 hours
            secure: false
        })
        const createUser = await registerUser.save();
        res.status(201).render("register",{
            success:"Successfully Added !!"
        });
        }
    } catch (error) {
        // res.status(400).send(error);
        res.status(200).render("register",{
            err:errHandle(error.message)
        })
        
    }
});
// POST Method For API
router.post("/registerApi",async(req,res)=>{
    try {
        const registerUser = new Register(req.body);
        const createUser = await registerUser.save();
        res.status(201).render("register");
        
    } catch (e) {
        res.send(errHandle(e.message));
        // errorFormatter(error);
    }
});

// Check Login
router.post("/signin",async(req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        const userEmail = await  Register.findOne({email:email});

        //  Midleware For JWT OAuth 
        const token = await userEmail.generateOAuthToken();
    
        const isMatch = await bcrypt.compare(password,userEmail.password);
        // Cookies
        res.cookie("mybiscuit",token,{
            httpOnly:true,
            expires: new Date(Date.now() + 8 * 3600000), // cookie will be removed after 8 hours
            secure: false //If Https its True
        })
        if (isMatch===true) {
            // res.status(201).render("secret");
            res.status(201).redirect("secret");
        }else{
            res.send("Password is Not Matching !!")
        }
    } catch (error) {
        res.status(400).send("Invaild Email !!")
    }
});

// Get User Data 
router.get("/users", async(req,res)=>{
    try {
       const readUsers = await Register.find().select({
        __v:0
    });
       res.status(201).send(readUsers);
    } catch (err) {
        res.status(400).send(err);
        throw err;
    }
});

// ####### Export Router #######
module.exports = router;
