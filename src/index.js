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



// Creates a list of users in an object
const mockUserData=[
    {name:'Mark'},
    {name:'Jill'},
    {name:'Jose'},
    {name:'Esperanza'}
    ]

app.get('/users', (req, res) => {
    // (req, res) responds with a json object sending:
    // true, a success essage, and the users
    res.json({
        success: true,
        message: 'Successfully got all users. Nice!',
        users: mockUserData
    })
})



app.listen(3000, function() {
    console.log("server is running");
})