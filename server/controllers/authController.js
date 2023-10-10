const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const validator = require('validator');

// Registers a user
const registerUser = async (req, res) => {
    const { firstname, lastname, email, password, role } = req.body;

    //Using validator for password and email validation
    
    if (!email || !password) {
        return res.status(400).json({error: "input all credential fields"});
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({error: "Email is not valid"});
    }

    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({error: "Password is not strong enough"});
    }
    const exists = await User.findOne({ email });
    if (exists) {
         return res.status(400).json({error: "User already exists"});
    }
    const hashedpw = await bcrypt.hash(password, 10)
    const user = await User.create({ firstname, lastname, email, password:hashedpw, role });
    res.status(200).json({ email, user })
};

// Logs in a user
const loginUser = async (req, res) => {
    res.json({message: "loggedin user"});
};

module.exports = {registerUser, loginUser};