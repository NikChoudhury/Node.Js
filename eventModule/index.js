// Every action on a computer is an event. 
// Like when a connection is made or a file is opened.

const EventEmitter = require('events');
const event = new EventEmitter();

event.on('myEvent',()=>{
    console.log("MY NAME IS NIK");
});
event.on('myEvent',()=>{
    console.log("MY NAME IS Choudhury");
});

event.emit('myEvent');
// ################################

event.on('checkPage',(statusCode,msg)=>{
    console.log(`Status Code = ${statusCode} and Message is ${msg}`)
});

event.emit('checkPage',200,'OK')