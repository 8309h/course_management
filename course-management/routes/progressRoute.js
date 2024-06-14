const express = require('express');
const { getUserProgress, updateUserProgress } = require('../controllers/progressController');
const { authenticateToken } = require('../middleware/auth');
const router = express.Router();

router.get('/users/:id/progress', authenticateToken, getUserProgress);
router.post('/users/:id/progress', authenticateToken, updateUserProgress);

module.exports = router;
