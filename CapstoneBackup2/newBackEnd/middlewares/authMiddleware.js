const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_key';  // Should match the secret used for signing the token

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Get token from 'Authorization: Bearer <token>'

  if (token == null) return res.sendStatus(401); // If no token, return Unauthorized

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // If token is invalid, return Forbidden
    req.user = user; // Attach user to request object
    next(); // Proceed to the next middleware or route handler
  });
};

module.exports = authenticateToken;
