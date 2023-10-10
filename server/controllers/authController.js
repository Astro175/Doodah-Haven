const User = require('../models/userModel');
const bcrypt = require('bcrypt');

// Registers a user
const registerUser = async (req, res) => {
    const { firstname, lastname, email, password, role } = req.body

    if (!email || !password) {
        return res.status(200).json({error: "input all credential fields"});
    }
    const exists = await User.findOne({ email });
    if (exists) {
         return res.status(200).json({error: "User already exists"});
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