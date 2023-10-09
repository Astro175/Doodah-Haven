const express = require('express');
const { signupUser, loginUser } = require('../controllers/authController');

const router = express.Router()

// Login route path

router.post('/login', loginUser);


//Sign up route path

router.post('/signup', signupUser);

module.exports = router;