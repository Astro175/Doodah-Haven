const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const passport = require('passport');
const passportSetUp = require('../config/passport-setup');
const router = express.Router()

//Signup route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Google Auth route
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
router.get('/google/redirect', passport.authenticate('google'), function(req, res) {
    // Successful authentication, redirect home.
    res.send('You reached callback uri')
  }
);
module.exports = router;