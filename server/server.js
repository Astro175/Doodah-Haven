const express = require("express");
const cors = require("cors");
const morgan = require('morgan');
require('dotenv').config();

const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const connectDatabase = require("./config/db");
const errorHandler = require("./middleware/errorHandler");


connectDatabase();

const app = express();
const port = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // Middleware to replace requestlogger function
app.use(errorHandler);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);

app.listen(port, () => {
    console.log('Listening on port', port);
});
