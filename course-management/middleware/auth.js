const jwt = require('jsonwebtoken');
const User = require('../models/User');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, 'secretkey', async (err, user) => {
    if (err) return res.sendStatus(403);

    const dbUser = await User.findByPk(user.id);
    if (!dbUser) return res.sendStatus(403);

    req.user = dbUser;
    next();
  });
};

const authorizeRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) return res.sendStatus(403);
    next();
  };
};

module.exports = { authenticateToken, authorizeRole };
