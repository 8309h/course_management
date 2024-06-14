const Course = require('../models/Course');

const getCourses = async (req, res) => {
  const courses = await Course.findAll();
  res.json(courses);
};

const getCourse = async (req, res) => {
  const course = await Course.findByPk(req.params.id);
  if (!course) return res.sendStatus(404);
  res.json(course);
};

const createCourse = async (req, res) => {
  const { title, description } = req.body;
  const course = await Course.create({ title, description, teacherId: req.user.id });
  res.json({ message: 'Course created successfully.', course });
};

const updateCourse = async (req, res) => {
  const { title, description } = req.body;
  const course = await Course.findByPk(req.params.id);
  if (!course) return res.sendStatus(404);

  if (course.teacherId !== req.user.id) return res.sendStatus(403);

  course.title = title;
  course.description = description;
  await course.save();
  res.json({ message: 'Course updated successfully.', course });
};

const deleteCourse = async (req, res) => {
  const course = await Course.findByPk(req.params.id);
  if (!course) return res.sendStatus(404);

  if (course.teacherId !== req.user.id) return res.sendStatus(403);

  await course.destroy();
  res.json({ message: 'Course deleted successfully.' });
};

module.exports = { getCourses, getCourse, createCourse, updateCourse, deleteCourse };
