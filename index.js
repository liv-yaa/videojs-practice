// index.js
// Following this class to start an express server at `http://localhost:3000/`
// Uses two libraries to create an Express app and start it at the specified port
// https://www.coursera.org/learn/server-side-nodejs/supplement/DdJt7/exercise-instructions-introduction-to-express
// Must also create package.json install these so that npm will add them to node modules:
//      npm install morgan@1.9.0 --save
//      npm install express@4.16.3 --save 

// Import modules
const express = require('express'); // Express backend server 
const http = require('http'); // Uses http method to create a server from the Express app
const morgan = require('morgan'); // logging

// Global variables
const hostname = 'localhost';
const port = 3002;

const app = express(); // Our Express App
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});




