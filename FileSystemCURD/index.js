// CURD FileSystem

const fs = require('fs');

//#### Create Folder### 
// fs.mkdirSync("Nik");

//#######Create a file in it named read.txt and data into it##########
// fs.writeFileSync("Nik/read.txt", "Hey This is Nik")


// ######### Adding More data into the file at the end of existing data ############
// fs.appendFileSync('Nik/read.txt', " Nik Again !!!!!!!!!!")


// ############## Read The data without getting buffer data###############
// const readableData = fs.readFileSync("Nik/read.txt",'utf-8');
// console.log(readableData);


//########### Rename the file name to readWrite.txt ####################
// fs.renameSync('Nik/read.txt', 'Nik/readWrite.txt');


// ########## Delete both File and Folder #################

// Delete File 
// const path = 'Nik/read.txt'

// try {
//   fs.unlinkSync(path);
//   console.log("Successfully Deleted !!!")
//   //file removed
// } catch(err) {
//   console.error(err)
// }


// Detete Folder
// fs.rmdirSync("Nik");