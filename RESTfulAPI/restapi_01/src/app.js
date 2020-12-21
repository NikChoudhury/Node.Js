// Packeages
const express = require('express');
const app = express();
require("./db/conn");
const Student = require("./models/students");
// Port
const port = process.env.PORT || 8050;

//################ Middleware ################

/*express.json() is a method inbuilt in express to 
recognize the incoming Request Object as a JSON Object. 
This method is called as a middleware in your application 
using the code: app.use(express.json());*/

app.use(express.json());

//################ Routing ################
app.get("/",(req,res)=>{
    res.send(" RESTFul API");
});

// Post Request with Promises //
// app.post("/Students",(req,res)=>{
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
app.post("/Students",async(req,res)=>{
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
app.get("/Students", async(req,res)=>{
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
app.get("/Students/:id", async(req,res)=>{
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
// app.get("/Students/:name",async(req,res)=>{
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


app.get("*",(req,res)=>{
    res.send("<h1 style='color:red;'>404 Error Page not Found !!!</h1>")
});

app.listen(port,()=>{
    console.log(`Your app is listen on http//localhost:${port}`);
})