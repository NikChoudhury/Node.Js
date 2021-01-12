const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
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

// ################ Define Midleware For Hashing Password ################
registerSchema.pre('save',async function(next){
   if (this.isModified('password')) {
        // console.log(`Without Hashing : ${this.password}`);
        this.password = await  bcrypt.hash(this.password,12);
        this.confirmpassword = undefined;
        // console.log(`With Hashing : ${this.password}`);
        next();
   }
});

// ################ Define Model or Collections Creation ################
const Register = new mongoose.model("Register",registerSchema);

module.exports = Register;

// ####### Bcrypt Pass Technique #######
/*const securePassword = async(password)=>{
    // For Hashing
   const passhass = await  bcrypt.hash(password,12);
   console.log(passhass);
    //Compare    
   const passCheck = await bcrypt.compare(password,'$2b$12$rEfnk/.UFKz/eRxZOW2LOOc8na/CVG.zp1yiYqZk30u2ENJ6FiS..');
   console.log(passCheck);
}*/
// securePassword("Nik")