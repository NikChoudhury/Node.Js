const express = require('express');
const { model } = require('mongoose');
const Student = require("../models/students");

// 1: Create a new router 
const router = new express.Router();

// 2: We Need to define the router
// router.get("/Nik",(req,res)=>{
//     res.send("Hello World");
// });

//################ Routing ################
router.get("/",(req,res)=>{
    res.send(" RESTFul API");
});

// Post Request with Promises //
// router.post("/Students",(req,res)=>{
//     // console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((err) => {
//         res.status(400).send(err);
//         console.log(err);
//     });
// });

// Post request with Async wait function //
router.post("/Students",async(req,res)=>{
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(200).send(createUser);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
});

// Get Request in REST API //
router.get("/Students", async(req,res)=>{
    try {
       const readUsers = await Student.find().select({
        __v:0
    });
       res.status(201).send(readUsers);
    } catch (err) {
        res.status(400).send(err);
        throw err;
    }
});

// Get individual Student Data With Find By ID Method //
router.get("/Students/:id", async(req,res)=>{
    try {
        const _id = req.params.id;
        const readUser = await Student.findById(_id);
        if (!readUser) {
            res.status(404).send();
        }else{
            res.status(201).send(readUser);
        }
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});

// Get individual Student Data //
// router.get("/Students/:name",async(req,res)=>{
//     try {
//         const name = req.params.name;
//         const readUserByName = await Student.find({
//             name //Object Destucturing Key and value with same name
//         });
//         if (!readUserByName) {
//             res.status(404).send();
//         } else {
//             res.status(201).send(readUserByName);
//         }
        
//     } catch (error) {
//         res.status(500).send(error);
//         throw error;
//     }
// });


// PATCH and PUT Request in Restful API //
//Update Students data by its ID

router.patch("/Students/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        })
        res.status(201).send(updateStudent);
    } catch (error) {
        res.status(404).send(error);
        throw error;
    }
});


// DELETE Request in Restful API //
//DELETE Students data by its ID
router.delete("/Students/:id",async(req,res)=>{
    try {
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if (!_id) {
            return res.status(404).send();
        }else{
            res.status(201).send(deleteStudent);
        }
        
    } catch (error) {
        res.status(500).send(error);
        throw error;
    }
});


//Delete Students by its name
// router.delete("/Students/:name",async(req,res)=>{
//     try {
//         const name =  req.params.name;
//         const deleteStudent = await Student.findOneAndDelete({name:name});
//         if (!name) {
//             return res.status(404).send("Not Found");
//         }else{
//             res.status(201).send(deleteStudent);
//         }
        
//     } catch (error) {
//         res.status(500).send(error);
//         throw error;
//     }
// });

module.exports = router;