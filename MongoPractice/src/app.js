// Importing
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/my_database';

//connect DataBase or Create database if it not exist
const connectDatabase = async()=>{
    
    try {
        await mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
        });
        console.log("DB connected Successfully!!")
    } catch (error) {
        console.log(`Conection error:  ${error}`);
    }
}
connectDatabase();


//Define or Create Schema
const blogPostSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    title: String,
    body: String,
    date:{
        type:Date,
        default:Date.now
    }
});

// Create Collections Or Model
const MyModel = new mongoose.model("BlogPost",blogPostSchema);

//Create Document or insert

const createDocument = async ()=>{
    try {
        const bloglist = new MyModel({
            author:"Nikumani",
            title: "13 Reason Why ?",
            body: "Bal Balh bahl",
        });

        const result = await bloglist.save();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// createDocument();


//Find Data base
// Method One

// Method Two
// const findDatabase = async()=>{
//     try {
//         const results = await MyModel.find().exec();
//         return next(results)
//     } catch (error) {
//         console.log(error) ;
//     }
// }
// const x = findDatabase()
// console.log(x)


const data = MyModel.find().then((result) => {
    
    const results = result;
    // console.log(`${results}`);
    console.log(results);
   
}).catch((err) => {
    throw err;
});







// Routing
app.get("/",async(req,res)=>{

        try {
            const results = await MyModel.find();
            res.send(`${results}`);
            res.end();
        } catch (error) {
            console.log(error) ;
        }
    
})

app.listen(port,()=>{
    console.log(`Your app is listen on http://localhost:${port}`);
})
