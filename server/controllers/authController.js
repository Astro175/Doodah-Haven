const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const validator = require('validator');
const secret_key = process.env.SECRET_KEY

// Registers a user
const registerUser = async (req, res) => {
    const { firstname, lastname, email, password, role } = req.body;

    if (!firstname) return res.status(400).json({error: "Firstname Required"});
    if (!lastname) return res.status(400).json({error: "Lastname Required"});
    if (!email) return res.status(400).json({error: "Input email"});
    if (!password) return res.status(400).json({error: "Input password"});

    //Using validator for password and email validation
    if (!validator.isEmail(email)) {
        return res.status(400).json({error: "Email is not valid"});
    }
    if (!validator.isStrongPassword(password)) {
        return res.status(400).json({error: "Password is not strong enough"});
    }

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({error: "User already exists"});

    const hashedpwd = await bcrypt.hash(password, 10)
    const user = await User.create({ firstname, lastname, email, password: hashedpwd, role });

    // Generating a JWT token
    jwt.sign(
        { userId: user._id, email: user.email },
        secret_key,
        { expiresIn: '1h' },
        (err, token) => {
            if (err) throw err;
            // It is being saved in our DB and sent to the client
            user.token = token
            user.save();
            res.status(200).json({ user, token });
        }
        );
    };

// Logs in a user
const loginUser = async (req, res) => {
    // Check for validation errors
    const { email, password } = req.body;
    if (!email) return res.status(400).json({error: "Input email"});
    if (!password) return res.status(400).json({error: "Input password"});

    try {
        let user = await User.findOne({ email });

        // Check if the provided password matches the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch || !user ) return res.status(400).json({ msg: 'Invalid credentials' });
  
        // Create and return JSON Web Token (JWT) for authentication
        jwt.sign(
            { userId: user._id, email: user.email },
            secret_key,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                user.token = token;
                user.save();
                res.status(200).json({ user, token });
            }
        );
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    };

module.exports = {registerUser, loginUser};