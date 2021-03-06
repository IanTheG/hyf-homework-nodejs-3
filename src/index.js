/* This file starts an express server 
and that responds to the root url / with 
the body Hello World!. 
Ah and would be listen to the port 3000. */

const express = require('express');
const app = express();

// enables POST requests
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Sends Hello World! when GET requests match the root path
app.get("/", (req, res) => { res.send('Hello World!')});



app.listen(3000, function() {
    console.log("server is running");
})