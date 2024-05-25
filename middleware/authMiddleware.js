const jwt = require('jsonwebtoken');


const requireAuth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, HARRY, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid or expired token' });
      } else {
        req.userId = decodedToken.userId;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'Token not provided' });
  }
};

module.exports = { requireAuth };