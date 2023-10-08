// This is an entry point, would be worked on with subsequent pushes
const express = require("express");
require('dotenv').config();
const port = process.env.PORT
const app = express();

// Adding a middleware, so we know what PATH and METHOD is used for each request
// Just for testing purpose as we build the API
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

// Test route
app.get('/', (req, res) => {
    res.send("Test route")
})


app.listen(port, () => {
    console.log('listening on port', port);
});