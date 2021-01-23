const jwt = require("jsonwebtoken");
const Register = require("../models/register");

const auth = async (req, res, next) => {
    try {
        const token = req.cookies.mybiscuit;
        const verifyUser = jwt.verify(token, process.env.SECRET_KEY);
        const user = await Register.findOne({ _id: verifyUser._id });
        await Register.findOne({ token: user.tokens[0].token }).catch(error => { throw error });
        // console.log(userTok);
        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        // res.status(401).send(error);
        res.render('signin', {
            loginErr: {
                message: 'Please login to continue',
                messageClass: 'alert-danger'
            }
        });

    }
}

module.exports = auth;
