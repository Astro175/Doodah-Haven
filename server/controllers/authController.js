const User = require('../models/userModel');

// Registers a user
const registerUser = async (req, res) => {
    res.json({message: "signed up user"});
};

// Logs in a user
const loginUser = async (req, res) => {
    res.json({message: "loggedin user"});
};

module.exports = {registerUser, loginUser};