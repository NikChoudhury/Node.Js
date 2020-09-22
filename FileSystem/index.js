const fs = require("fs"); //File System Module

 //Creating a new File
//fs.writeFileSync('read.txt',"This Is File System Module");

// Update the Same file...
// fs.appendFileSync('read.txt'," This is Nik Again"); 

// Read File
// utf-8 => Encoding
// const readFile = fs.readFileSync('read.txt',"utf-8");
// console.log(readFile)


//Delete File
// try{
//     fs.unlinkSync('Assignment SE.pdf');
//     console.log("Successfully Deleted");
// }catch(err){
//     console.log("Error In delete");
// }


// Rename File
// try {
//     fs.renameSync('read.txt','readWrite.txt');
//     console.log("SuccessFully Rename");
// } catch (error) {
//     console.log("Error In rename!!!")
// }


// let x = 0;

// while (x<10) {
//    // fs.writeFileSync(`read${x++}.txt`, `Hello`)
//      fs.unlinkSync(`read${x++}.txt`);
//     // console.log(x++);
// }