const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5500;

// Connent Mongoose Or Create Database if not Exist
mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() => {
    console.log("DB connected Successfully!!")
}).catch((err) => {
    console.log(err);
});

//Define or Create Schema
const playlistSchema=new mongoose.Schema({
   name:{
       type:String,
       required:true
    },
   ctype:String,
   videos:Number,
   author:String,
   active:Boolean,
   date:{
       type:Date,
       default:Date.now
   } 
});

// Define Model or Collections Creation
const Playlist = new mongoose.model("Playlist",playlistSchema);

//Create Document or insert
const createDocument = async () =>{
    try {
        const coursePlaylist = new Playlist({
            name:"React JS",
            ctype: "Front End",
            videos: 55,
            author: "Nikumani Choudhury",
            active: true
        });
        
        const result = await coursePlaylist.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
 
}

// createDocument();




// Routing
app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.listen(port,()=>{
    console.log(`Your app is listen on http://localhost:${port}`);
})

