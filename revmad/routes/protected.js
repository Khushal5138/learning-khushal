const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// Example of a protected route
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
