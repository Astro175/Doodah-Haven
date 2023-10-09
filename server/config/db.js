const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

const uri = process.env.URI

const db = mongoose.connect(uri, {useNewURLParser: true, useUnifiedTopology: true});

module.exports = db;