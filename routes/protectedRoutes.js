const express = require('express');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/protected-route', requireAuth, (req, res) => {
  res.json({ message: 'You accessed a protected route!' });
});

module.exports = router;