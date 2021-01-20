const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

exports.mail_Controller = async function (req, res) {
    try {
        const email = req.body.email;
        const mail = await readFile("public/mail.html", "utf-8");
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.MY_PASS, // naturally, replace both with your real credentials or an application-specific password
            },
        });
        const mailOptions = {
            from: '"Choudhury 👻"' + process.env.MY_EMAIL,
            to: email,
            subject: "Hello World",
            mailedBy: "https://choudhury.herokuapp.com/",
            text: "It Works Again",
            html: mail,
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.status(201).render("index", {
                    response: {
                        title: "mail",
                        code: "warning",
                        msg: "Something is Worng !!",
                    },
                });
            } else {
                res.status(201).render("index", {
                    response: {
                        title: "mail",
                        code: "success",
                        msg: "Thank You !!",
                    },
                });
            }
        });
    } catch (error) {
        res.status(400).send(error);
    }
}


