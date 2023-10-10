const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const User = require('../models/userModel');

const router = express.Router()


// Test route for creating a new user, checking atlas functionality

// Creates a new user
router.post('/', async (req, res) => {
    const { firstname, lastname, email, password, role } = req.body

    try {
        const user = await User.create({ firstname, lastname, email, password, role });
        res.status(200).json(user);
    } catch(error) {
        res.status(400).json({error: error.message})

    }

})
//Signup route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

module.exports = router;