const jwt = require('jsonwebtoken');
const secret_key = process.env.SECRET_KEY

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization; // Although this is saved in our db and sent to the client
                                           // I think it should be set in the client auth header or session or as a cookie
                                           // So that we can make use of the expression above

  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, secret_key);
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
};

module.exports = verifyToken;