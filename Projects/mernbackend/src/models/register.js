const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
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
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});

// ################ Define Midleware For Jwt OAuth ################
registerSchema.methods.generateOAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id.toString()},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        throw error;
    }
}

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