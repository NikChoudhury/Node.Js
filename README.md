# Node.Js

![GitHub followers](https://img.shields.io/github/followers/NikChoudhury?style=social)
![Twitter URL](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2FNikChoudhury%3Fs%3D09)

## This Repo is Created For Node.Js

## Hey This Nikumani Choudhury ....

<hr>

# Social Links

Facebook: [NIK](https://www.facebook.com/nik.xim/)
<br>
Instagram: [**\_\_\_**crazy**soul**\_\_\*\*\*\*
](https://www.instagram.com/_______crazy__soul_______/)
<br>
Twitter: [@NikChoudhury](https://twitter.com/NikChoudhury)

<hr>

# FileSystem

<p>With synchronous method</p>
<br>
<br>
<hr>

# FileSystemCURD

<p>CURD operation  Challenge #1 with fs module (synchronous method)</p>
<br>
<br>
<hr>

# fsAsync

<p>FileSystem with Asynchronous method</p>
<br>
<br>
<hr>

# osModule

<p>The os module provides operating system-related utility methods and properties. </p>
<p>Usefull Links</p>

<br>

[How_to_usenetworkInterfaces_functioninos](https://www.codota.com/code/javascript/functions/os/networkInterfaces)

<ul>
<li>

[Node.js_os](https://nodejs.org/api/os.html#os_os_freemem)

</li>
<li>

[How_to_usenetworkInterfaces_functioninos](https://www.codota.com/code/javascript/functions/os/networkInterfaces)</li>

</ul>

<hr>

# pathModule

<p>The path module provides utilities for working with file and directory paths. </p>
<br>

[Node.js_path](https://nodejs.org/api/path.html#path_path_delimiter)

<hr>

# exportModule

<p>The module.exports is a special object which is included in every JavaScript file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. So, whatever you assign to module.exports will be exposed as a module.</p>

<br>

[Export_Module_in_Node.js](https://www.tutorialsteacher.com/nodejs/nodejs-module-exports)

<hr>

# npm_module

<p>Node Package Manager (NPM) is a command line tool that installs, updates or uninstalls Node.js packages in your application. It is also an online repository for open-source Node.js packages. The node community around the world creates useful modules and publishes them as packages in this repository.</p>
<br>

[NPM_Official website](https://www.npmjs.com/)
<br>

[Node_Package_Manager](https://www.tutorialsteacher.com/nodejs/what-is-node-package-manager)

<hr>

# http_module

<p>To use the HTTP server and client one must require('http').

The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.</p>

<p>Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).</p>

<br>

[Offical_Website](https://nodejs.org/api/http.html#http_http)
<br>

[W3SCHOOL](https://www.w3schools.com/nodejs/nodejs_http.asp)

<hr>

# http_url_module

<p>The URL module splits up a web address into readable parts. A URL string is a structured string containing multiple meaningful components. When parsed, a URL object is returned containing properties for each of these components.

The url module provides two APIs for working with URLs: a legacy API that is Node.js specific, and a newer API that implements the same WHATWG URL Standard used by web browsers.</p>

<br>

[Offical_Website](https://nodejs.org/api/url.html#url_url)
<br>

[W3SCHOOL url module](https://www.w3schools.com/nodejs/nodejs_url.asp)

<hr>

# jsonNode.js

<p>JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.</p>
<p>JSON: JavaScript Object Notation.

JSON is a syntax for storing and exchanging data.

JSON is text, written with JavaScript object notation.</p>

<br>

```javascript
const bioData = {
  firstName: "Nikumani",
  lastName: "Choudhury",
  age: 23,
};
```

<p>JSON.stringify()</p>

```javascript
//Convert JS object to JSON
const jsonData = JSON.stringify(bioData);
console.log(jsonData);
console.log(jsonData.firstName);
```

<p>JSON.parse()</p>

```javascript
//Convert JSON to JS object
const jsData = JSON.parse(jsonData);
console.log(jsData);
console.log(jsData.firstName);
```

[JSON offical](https://www.json.org/json-en.html)
<br>

[JSON_w3School](https://www.w3schools.com/js/js_json_intro.asp)

<hr>

# userApi

<p>An application programming interface (API) is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.</p>

<p>Create userApi.json file first.....</p>

```json
[
  {
    "id": 1,
    "firstname": "Nikumani",
    "lastname": "Choudhury",
    "email": "nik@gmail.com",
    "address": {
      "vill/town": "Paltan Bazar",
      "PO": "Guwahati",
      "PS": "Guwahati",
      "dist": "Barpeta",
      "state": "Assam",
      "country": "India",
      "pin": 781317
    },
    "language": "Assamese",
    "Phone": 1234567890
  },
  {
    "id": 2,
    "firstname": "Nayan",
    "lastname": "Nath",
    "email": "nayan@gmail.com",
    "address": {
      "vill/town": "Bhatarmari",
      "PO": "Salbari",
      "PS": "Pathsala",
      "dist": "Baksa",
      "state": "Assam",
      "country": "India",
      "pin": 781318
    },
    "language": "Bodo",
    "Phone": 1234567895
  },
  {
    "id": 3,
    "firstname": "Saurav",
    "lastname": "Nath",
    "email": "aalu@gmail.com",
    "address": {
      "vill/town": "Santinagar",
      "PO": "Barpeta Road",
      "PS": "Barpeta Road",
      "dist": "Barpeta",
      "state": "Assam",
      "country": "India",
      "pin": 781316
    },
    "language": "English",
    "Phone": 123456558
  }
]
```

<br>
<hr>

# eventModule

<p>Every action on a computer is an event. Like when a connection is made or a file is opened.
Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.

To include the built-in Events module use the require() method. In addition, all event properties and methods are an instance of an EventEmitter object. To be able to access these properties and methods, create an EventEmitter object:</p>

```javascript
const EventEmitter = require("events");
const event = new EventEmitter();
```

<br>

[Offical_Website](https://nodejs.org/api/events.html)
<br>

[W3SCHOOL events module](https://www.w3schools.com/nodejs/nodejs_events.asp)

<br>

[TutorialsPoits events module](https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm)

<hr>

# StreamsModule

<p>Streams are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams −

Readable − Stream which is used for read operation.

Writable − Stream which is used for write operation.

Duplex − Stream which can be used for both read and write operation.

Transform − A type of duplex stream where the output is computed based on input
Each type of Stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are −

data − This event is fired when there is data is available to read.

end − This event is fired when there is no more data to read.

error − This event is fired when there is any error receiving or writing data.

finish − This event is fired when all the data has been flushed to underlying system.</p>

---

The 'pipe' event is emitted when the stream.pipe() method is called on a readable stream, adding this writable to its set of destinations.

---

[Offical_Website](https://nodejs.org/api/stream.html#stream_stream)
<br>

[TutorialsPoits events module](https://www.tutorialspoint.com/nodejs/nodejs_streams.htm)

<hr>

<hr>

# Express.js

<p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It facilitates the rapid development of Node based Web applications. Following are some of the core features of Express framework −

    Allows to set up middlewares to respond to HTTP Requests.

    Defines a routing table which is used to perform different actions based on HTTP Method and URL.

    Allows to dynamically render HTML Pages based on passing arguments to templates.

</p>

    Installing Express
    Firstly, install the Express framework globally using NPM so that it can be used to create a web application using node terminal.

        $ npm install express

[Offical_Website](https://expressjs.com)
<br>

[TutorialsPoits Express Js](https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm)

<hr>

# Express.js template engines

<p>A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.

Some popular template engines that work with Express are Pug, Mustache, hbs and EJS. The Express application generator uses Jade as its default, but it also supports several others.

        Express.js view engine for handlebars.js

Using hbs as the default view engine requires just one line of code in your app setup. This will render .hbs files when res.render is called.

        app.set('view engine', 'hbs');

</p>

[Offical_Website](https://expressjs.com/en/guide/using-template-engines.html)
<br>

[hbs](https://www.npmjs.com/package/hbs)
<br>

[pug](https://www.npmjs.com/package/pug)

<hr>
