// This is an entry point, would be worked on with subsequent pushes
const express = require("express");
const cors = require("cors");
require('dotenv').config();

const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const connectDatabase = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

connectDatabase();
const app = express();
const port = process.env.PORT

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});
app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(port, () => {
    console.log('Listening on port', port);
});