const User = require('../models/userModel');
// signup user

const signupUser = async (req, res) => {
    res.json({message: "signed up user"});
};

// login user

const loginUser = async (req, res) => {
    res.json({message: "loggedin user"});
};

module.exports = {signupUser, loginUser};