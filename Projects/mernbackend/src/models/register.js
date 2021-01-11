const mongoose = require('mongoose');
const validator = require('validator');
//################ Define or Create Schema ################
registerSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        required:[true,"First Name Is Required!!"]
    },
    lastname:{
        type:String,
        trim:true,
        required:[true,"Last Name Is Required!!"]
        
    },
    email:{
        type:String,
        required:[true,"Email Is Required!!"],
        unique:[true,"Email id already Present !!"],
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Email is invaild");
            }
        }
    },
    gender:{
        type:String,
        required:[true,"Please Select Gender!!"]
    },
    password:{
        type:String,
        required:[true,"Password Is Required!!"],
        validate(value){
            if (!validator.isStrongPassword(value)) {
                throw new Error("Password Is not Strong");
            }
        }
    },
    confirmpassword:{
        type:String,
        required:[true,"Confirm Password Is Required!!"]
    }
});
// ################ Define Model or Collections Creation ################
const Register = new mongoose.model("Register",registerSchema);

module.exports = Register;