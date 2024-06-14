const express = require('express');
const { getCourses, getCourse, createCourse, updateCourse, deleteCourse } = require('../controllers/courseController');
const { authenticateToken, authorizeRole } = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticateToken, getCourses);
router.get('/:id', authenticateToken, getCourse);
router.post('/', authenticateToken, authorizeRole(['teacher']), createCourse);
router.put('/:id', authenticateToken, authorizeRole(['teacher']), updateCourse);
router.delete('/:id', authenticateToken, authorizeRole(['teacher']), deleteCourse);

module.exports = router;
