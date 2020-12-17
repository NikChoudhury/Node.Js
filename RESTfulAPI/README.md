# **_REST Ful API_**

[![Generic badge](https://img.shields.io/appveyor/build/NikChoudhury/Node.Js?style=plastic)]
[![Generic badge](https://img.shields.io/cdnjs/v/mongoose?logo=mongoose)]
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
[![GitHub release](https://img.shields.io/github/release/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/releases/)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
![npm](https://img.shields.io/npm/v/express?color=green&label=express&logoColor=green&style=plastic)
![npm](https://img.shields.io/npm/v/mongoose?color=green&label=Mongoose&logoColor=green&style=plastic)
![npm](https://img.shields.io/npm/v/validator?color=green&label=validator&logoColor=green&style=plastic)

### express.json()

_ **express.json()** is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());_

_You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request_
