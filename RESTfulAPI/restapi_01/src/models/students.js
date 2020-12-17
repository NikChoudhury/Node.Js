const mongoose = require('mongoose');
const validator = require('validator');

//################ Define or Create Schema ################
const Schema = mongoose.Schema;
const studentSchema = new Schema({
    name:{
        type:String,
        required:true,
        minLength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"Email id already Present !!"],
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Email is invaild");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:[true,"Phone number is allready present"]
    },
    address:{
        type:String,
        required:true
    }
});

// ################ Define Model or Collections Creation ################
const Student = new mongoose.model("Student",studentSchema);

module.exports = Student;