const express = require("express");
const app = express();
// const flash = require("connect-flash");
// const session = require("express-session");
const router = new express.Router();
const Register = require("../models/register");
const auth = require("../middleware/auth");

// Controllers
const mailController = require("../controllers/mail.controller");
const userController = require('../controllers/user.controller');
// ###### Routers ######

// Navbar Route
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/survices", (req, res) => {
  res.render("survices");
});
router.get("/SourceCode", (req, res) => {
  res.render("survices");
});
router.get("/Contect", (req, res) => {
  res.render("survices");
});
router.get("/About", (req, res) => {
  res.render("survices");
});

// Work Route
router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/signin", (req, res) => {
  res.render("signin");
});

router.get("/secret", auth, (req, res) => {
  const user = req.user;
  res.render("secret", {
    userdata: user,
  });
});

// LogOut
router.get("/logout", auth, userController.userLogout);


// Create a New User
router.post("/register", userController.userRegistration);

// Check Login
router.post("/signin", userController.userLogin);

// News-letter (Node Mailer)
router.post("/news_letter", mailController.mail_Controller);

// ####API ROUTE ######
// Get User Data
router.get("/users", async (req, res) => {
  try {
    const readUsers = await Register.find().select({
      __v: 0,
    });
    res.status(201).send(readUsers);
  } catch (err) {
    res.status(400).send(err);
    throw err;
  }
});
// POST Method For API
router.post("/registerApi", async (req, res) => {
  try {
    const registerUser = new Register(req.body);
    const createUser = await registerUser.save();
    res.status(201).render("register");
  } catch (e) {
    res.send(errHandle(e.message));
    // errorFormatter(error);
  }
});

// ####### Export Router #######
module.exports = router;
