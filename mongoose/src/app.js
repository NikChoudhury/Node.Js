const express = require('express');
const app = express();
const mongoose = require('mongoose');
var validator = require('validator');
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
       required:true, // validator
       unique:true,//Not a Validator but act as validator
       uppercase:true,//uppercase:boolean, whether to always call .toUpperCase() on the value
       trim:true,//trim: boolean, whether to always call .trim() on the value
       minlength:[2, "Minimum 2 Letters"], //minLength: Number, creates a validator that checks if the value length is not less than the given number
       maxlength:[30,"Maximum 30 Letters"] //maxLength: Number, creates a validator that checks if the value length is not greater than the given number
    },
   ctype:{
       type:String,
       required:true,
       uppercase:true,
       enum:["FRONT END","BACK END","DATABASE"] //enum: Array, creates a validator that checks if the value is in the given array.
   },
   videos:{
       type:Number,
        // Custom validation Method One

       validate(value){ /*User Input Value*/
            if (value<0) {
                throw new Error("Videos Count Should not be Negative");
            }
       }

        // Method Two
        // validate:{
        //     validator:function(value){
        //         return value.length < 0
        //     },
        //     message:"Videos Count Should not be Negative"
        // }
   },
   author:String,
   authormail:{
        type:String,
        default:null,
        // NPM validator 
        validate(value){
            if (value!=null) {
                if (!validator.isEmail(value)) {
                    throw new Error("Email is Invaild !!")
                }  
            }
        }
        
   },
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
            name:"React JSX",
            ctype: "Front End",
            videos: 5,
            author: "Nikumani Choudhury",
            authormail:"dhhdhhd",
            active: true
        });
        
        const result = await coursePlaylist.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
 
}

createDocument();


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
// const data = Playlist.find().limit(5).then((result) => {
//     const results = result;
//     console.log(results);
// }).catch((err) => {
//     throw err;
// });


// ################ Query-comparison an Logical Oprator ################
const queryDocument = async()=>{
    try {
        const result = await Playlist.find({
            ///////////////// Comparison Oprator  ////////////////////
            // videos:{
            //     $eq:50
            // }
            // videos:{
            //     $gte:30
            // },
            // ctype:{
            //     $in:["Back End", "Database"]
            // }
            ///////////////// Logical Oprator  ////////////////////
            $nor:[
                {videos:{
                    $lt:50
                }},{
                    ctype:"Database"
                }
            ]
        }).select({
            _id:0,
            name:1,
            ctype:1,
            videos:1
        }).sort({name: 1}) // 1 -> Ascending and -1 -> Descending
        // .countDocuments(); ---> Count Number of Documents
        console.log(result)
        
    } catch (error) {
        throw error;
    }
}

// queryDocument()

// ################ Update Documents ################
// query.findOneAndUpdate(conditions, update, options, callback)
// /// Method One
const updateDocumentMethodOne= async (name)=>{
    try {
        const result = await Playlist.update({name},{
            $set:{
                videos: 65
            }
        });
        console.log(result);
    } catch (error) {   
        throw error;
    }
}

// updateDocumentMethodOne("React JS");

/// Method two
const updateDocumentMethodTwo = async(id)=>{
    try {
        const result = await Playlist.findOneAndUpdate({_id:id},
            {
                $set:{
                    videos: 45
                }
            },{
            new:true,
            useFindAndModify: false
        }).select(
            {
                date:0,
                __v:0,
                author:0,
                active:0
            }
        )
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
// updateDocumentMethodTwo("5fcf71637c89ee23845139f8");




// ################ Delete Documents ################
//method one
const deleteDocumentsMethodOne = async(_id)=>{
    try {
        const result = await Playlist.deleteOne({_id});
        console.log(result);
        // if (result.n != 0) {
        //     console.log("Delete Opration Successful!!");
        // }else{
        //     console.log("Delete Opration Unsuccessful!!");
        // }
    } catch (error) {
        throw error
    }
}
// deleteDocumentsMethodOne("5fd7c8cb8807402a2c550412");


//Method Two
const deleteDocumentsMethodTwo= async(_id)=>{
    try {
        const result = await Playlist.findByIdAndDelete({_id});
        console.log(result);

    } catch (error) {
        throw error;
    }
}
// deleteDocumentsMethodTwo("5fd7c7984897352010541332");


// ################ Routing ################
app.get("/",async(req,res)=>{
    try {
        const result = await Playlist.find(/*{
             ctype:"Front End",
             active:true
        },{
            _id:0,
            _v:0
        }*/).select(
            {
                _id:0,
                __v:0
            }
        ).sort(
            {
                name: 1
            }
        );
        res.status(200).send(result);  
    } catch (error) {
        throw error;
    }
})

app.listen(port,()=>{
    console.log(`Your app is listen on http://localhost:${port}`);
})

