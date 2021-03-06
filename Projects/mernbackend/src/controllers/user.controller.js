const Register = require("../models/register");
const bcrypt = require("bcryptjs");

// ERROR Formatter
const errHandle = (e) => {
    let errors = {};
    const allErrors = e.substring(e.indexOf(":") + 1).trim();
    const allErrorsInArrayFormat = allErrors.split(",").map((err) => err.trim());
    allErrorsInArrayFormat.forEach((error) => {
        const [key, value] = error.split(":").map((err) => err.trim());
        errors[key] = value;
    });
    return errors;
};
// Registration
exports.userRegistration = async (req, res) => {
    try {
        const pass = req.body.pass;
        const cpass = req.body.cpass;
        if (pass != cpass) {
            res.status(200).render("register", {
                otherErr: "Password are Not Matching !!",
            });
        } else {
            const registerUser = new Register({
                firstname: req.body.fname,
                lastname: req.body.lname,
                email: req.body.email,
                gender: req.body.gender,
                password: req.body.pass,
                confirmpassword: req.body.cpass,
            });

            //  Midleware For JWT OAuth
            const token = await registerUser.generateOAuthToken();
            // Cookies
            res.cookie("mybiscuit", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 8 * 3600000), // cookie will be removed after 8 hours
                secure: true,
                sameSite: 'Strict'
            });
            const createUser = await registerUser.save().catch(error => { throw error });
            res.status(201).render("register", {
                success: "Successfully Added !!",
            });
        }
    } catch (error) {
        //res.status(400).send(error.message);
        res.status(200).render("register", {
            err: error.message,
        });
    }
}

// Login
exports.userLogin = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const userEmail = await Register.findOne({ email: email });
        const isMatch = await bcrypt.compare(password, userEmail.password);
        if (isMatch === true) {
            //  Midleware For JWT OAuth
            const token = await userEmail.generateOAuthToken();
            // Cookies
            res.cookie("mybiscuit", token, {
                httpOnly: true,
                expires: new Date(Date.now() + 8 * 3600000), // cookie will be removed after 8 hours
                secure: true, //If Https its True
                sameSite: 'Strict'
            });
            res.status(201).redirect("secret");
        } else {
            res.send("Password is Not Matching !!");
        }
    } catch (error) {
        res.status(400).send("Invaild Email !!");
    }
}

// LogOut
exports.userLogout = async (req, res) => {
    try {
        res.clearCookie("mybiscuit");
        if (req.query.all) {
            //Logout For All Device
            res.clearCookie("mybiscuit");
            req.user.tokens = [];
        } else {
            /* Remove Token From database
                LogOut For Single Device */
            req.user.tokens = req.user.tokens.filter((currToken) => {
                return currToken.token !== req.token;
            });
        }
        await req.user.save().catch(error => { throw error });
        res.redirect("signin");
    } catch (error) {
        res.status(500).send(error);
    }
}
