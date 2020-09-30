// Streams are objects that let you read data from 
// a source or write data to a destination in continuous fashion.

// const stream = require('stream');
const fs = require('fs');
const http = require('http');


const server = http.createServer();

server.on('request',(req, res)=>{

    // old way
    // fs.readFile('read.txt',(err,data)=>{
    //    if(err) return console.error(err);
  
    //    res.end(data);
    // }); 

    // 2nd way With stream
    // const rstream = fs.createReadStream('read.txt');
    
    // rstream.on('data',(chunkdata)=>{
        
    //     res.write (chunkdata);
        
    // })
    // rstream.on('end',()=>{
    //     res.end();
    // })


    // 3rd way With stream Pipe Method

    // The 'pipe' event is emitted when the stream.pipe() method is called on a readable stream,
    //  adding this writable to its set of destinations.
    const rstream = fs.createReadStream('read.txt');
    rstream.pipe(res);

    // If there is an error or file is not exist
    rstream.on('error',(err)=>{
        console.log(err);
        res.end(`file not Found ${err}`);
    })
  
});

server.listen(8000,'127.0.0.1',()=>{
    console.log(`Server is Listing on port 8000`)
});