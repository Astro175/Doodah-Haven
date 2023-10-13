const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '../.env' });
const secret_key = process.env.SECRET_KEY;
const User = require('../models/userModel');

const verifyToken = async (req, res, next) => {
  const authorization = req.headers.authorization; // Although this is saved in our db and sent to the client
                                           // It should be sent in the authorization header as a bearer token
  if (!authorization) return res.status(401).json({ error: 'Authorization token required' });
  const token = authorization.split(' ')[1] 
  

  try {
    const tokenId = jwt.verify(token, secret_key);
    req.user = await User.findOne({ tokenId });
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
};

module.exports = verifyToken;