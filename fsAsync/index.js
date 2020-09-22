const fs = require('fs');

// Asynchronous Way

// ######### Make a File ##########

// fs.writeFile('read.txt','Tonight is Awesome', (err)=>{
//  console.log(err);
//  console.log("File is Created !!")
// });


// ##### Make a Folder ############
// fs.mkdir('Files', (err)=>{
//     console.log(err);
//     console.log("Folder Created Successfully !!!");
// })



// ############Create more than one File########### 
let x = 0;
while (x<10) {
    // console.log(`File no. ${x} is created !!!`)
    
    // fs.writeFile(`Files/newfile${x}.txt`, `This is File No. ${x}` ,(err)=>{
    //     console.log(err);
    // })
   
    
    
// #######Delete more than one File ##########
    // fs.unlink(`Files/newFile${x}.txt`,(err)=>{
    //     console.log(err);
    // })


// ########## Update File ########## 
    // fs.appendFile(`Files/newFile${x}.txt`, " This is Nik.!!!! Updated !!", (err)=>{
    //     console.log("Data Updated !!!");
    //     console.log(`Error : ${err}`)
    // })


// ####### Read more than one File ############
    fs.readFile(`Files/newFile${x}.txt`,'utf-8',(err,data)=>{
        console.log(data);
    })


    x++;

}

// fs.appendFile(`Files/new.txt`, " This is Nik.!!!!", (err)=>{
//     console.log("Data Updated !!!");
//     console.log(`Error : ${err}`)
// })


