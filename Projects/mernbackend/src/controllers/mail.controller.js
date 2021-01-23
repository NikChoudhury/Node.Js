const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const { google } = require('googleapis');
const path = require("path");
const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));


const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const oAuth2Cliect = new google.auth.OAuth2(process.env.GCLIENT_ID, process.env.GCLIENT_SECRET, REDIRECT_URI);
oAuth2Cliect.setCredentials({ refresh_token: process.env.GREFRESH_TOKEN })
exports.mail_Controller = async function (req, res) {
    try {
        const email = req.body.email;
        const mail = await readFile("public/mail.html", "utf-8");
        const accessToken = await oAuth2Cliect.getAccessToken();
        const transporter = nodemailer.createTransport({
            // host: "smtp.gmail.com",
            // port: 465,
            service: "gmail",
            secure: true,
            auth: {
                // pass: process.env.MY_PASS,
                type: 'OAuth2',
                user: process.env.MY_EMAIL,
                clientId: process.env.GCLIENT_ID,
                clientSecret: process.env.GCLIENT_SECRET,
                refreshToken: process.env.GREFRESH_TOKEN,
                accessToken: accessToken
            },
            // logger: true,
            // debug: true,
            tls: {
                rejectUnauthorized: false
            }
        });
        const mailOptions = {
            from: '"Choudhury 👻"' + process.env.MY_EMAIL,
            to: email,
            subject: "Hello World",
            // mailedBy: "https://choudhury.herokuapp.com/",
            text: "It Works Again",
           html:mail,

        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.status(400).send(error.message)
                console.log(error);
//                 res.status(201).render("index", {
//                     response: {
//                         title: "mail",
//                         code: "warning",
//                         msg: "Something is Worng !!",
//                     },
//                 });
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


