const fs = require('fs'); // File System Module


//JavaScript Object
const bioData = {
    firstName: "Nikumani",
    lastName: "Choudhury",
    age: 23
}
// console.log(bioData);
// console.log(bioData.firstName);

//Convert JS object to JSON
const jsonData = JSON.stringify(bioData);
// console.log(jsonData);
// console.log(jsonData.firstName)

//Convert JSON to JS object
// const jsData = JSON.parse(jsonData);
// console.log(jsData);
// console.log(jsData.firstName);




// ####### Adding JSON data into a new json file ########
//Create a Folder
fs.mkdir('jsonFile',(err)=>{
    try {
        console.log("Folder Created Successfully !!");
    } catch (err) {
        console.log(`Error !!! ${err}`);
    }
});

// create a biodata.json file
fs.writeFile('jsonFile/biodata.json',jsonData,(error)=>{
    try {
        console.log("File Created Successfully !!!")
    } catch (error) {
        console.log(`Error !!! ${error}`);
    }
});

// Read the JSON file
fs.readFile('jsonFile/biodata.json','utf-8',(error,data)=>{
    try {
        console.log(data);
        const jsdata = JSON.parse(data); //JSON to jsObject
        console.log(jsdata.firstName);
    } catch (error) {
        console.log(`Error !!! ${error}`);
    }
});
