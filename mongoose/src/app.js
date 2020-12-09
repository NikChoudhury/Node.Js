const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5500;

//############ Connent Mongoose Or Create Database if not Exist ################
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

//################ Define or Create Schema ################
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

// ################ Define Model or Collections Creation ################
const Playlist = new mongoose.model("Playlist",playlistSchema);

//################ Create or insert Document ################
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


//################ Create or insert Multipile Documents ################
const createMultipleDocument = async () =>{
    try {
        const jsPlaylist = new Playlist({
            name:"JavaScripts",
            ctype: "Front End",
            videos: 155,
            author: "Nikumani Choudhury",
            active: true
        });
        const sqlPlaylist = new Playlist({
            name:"SQL",
            ctype: "Database",
            videos: 20,
            author: "Nikumani Choudhury",
            active: false
        });
        const mongoPlaylist = new Playlist({
            name:"MongoDB",
            ctype: "Database",
            videos: 30,
            author: "Nikumani Choudhury",
            active: true
        });
        
        const result = await Playlist.insertMany([jsPlaylist,sqlPlaylist,mongoPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
 
}
// createMultipleDocument();


// ################ Read Documents ################

// Method 1
const readDocument = async()=>{
    try {
        const result = await Playlist.find({
            ctype:"Front End",
            
        },{
            _id:0
            ,name:1
        });
        console.log(result);
    } catch (error) {
        throw error;
    }
}

// readDocument();

// Method 2
const data = Playlist.find().limit(5).then((result) => {
    const results = result;
    console.log(results);
}).catch((err) => {
    throw err;
});






// ################ Routing ################
app.get("/",async(req,res)=>{
    try {
        const result = await Playlist.find({
            ctype:"Front End",
            active:true
        },{
            _id:0,
            _v:0
        });
        res.send(result);  
    } catch (error) {
        throw error;
    }
})

app.listen(port,()=>{
    console.log(`Your app is listen on http://localhost:${port}`);
})

