const jwt= require('jsonwebtoken');
require('dotenv').config({ path: '../.env' });
const secret_key = process.env.SECRET_KEY;

// Helper function to generate a JWT
const generateToken = (user) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      { userId: user._id, email: user.email },
      secret_key,
      { expiresIn: '1h' },
      (err, token) => {
        if (err) reject(err);
        else {
          user.token = token;
          user.save().then(() => resolve(token)).catch(reject);
        }
      }
    );
  });
};

module.exports = generateToken;