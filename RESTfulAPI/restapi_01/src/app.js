// Packeages
const express = require('express');
const app = express();
//DB connection
require("./db/conn");
const Student = require("./models/students");
//Router
const router = require("./routers/router");
// Port
const port = process.env.PORT || 8050;

//################ Middleware ################

/*express.json() is a method inbuilt in express to 
recognize the incoming Request Object as a JSON Object. 
This method is called as a middleware in your application 
using the code: app.use(express.json());*/

app.use(express.json());

// 3: We need to register our Router
app.use(router);



app.get("*",(req,res)=>{
    res.send("<h1 style='color:red;'>404 Error Page not Found !!!</h1>")
});

app.listen(port,()=>{
    console.log(`Your app is listen on http//localhost:${port}`);
})