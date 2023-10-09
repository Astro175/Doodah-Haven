// This is an entry point, would be worked on with subsequent pushes
const express = require("express");
const cors = require("cors");
require('dotenv').config();

const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const db = require("./config/db");

// Database Connection
db.then(() => console.log('Database Connected'));
db.catch((error) => console.log(error.message));

const app = express();
const port = process.env.PORT

// Adding a middleware, so we know what PATH and METHOD is used for each request
// Just for testing purpose as we build the API
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(port, () => {
    console.log('Listening on port', port);
});