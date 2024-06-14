const Progress = require('../models/Progress');

const getUserProgress = async (req, res) => {
  const progress = await Progress.findAll({ where: { userId: req.params.id } });
  res.json(progress);
};

const updateUserProgress = async (req, res) => {
  const { course_id, progress } = req.body;
  let userProgress = await Progress.findOne({ where: { userId: req.params.id, courseId: course_id } });

  if (!userProgress) {
    userProgress = await Progress.create({ userId: req.params.id, courseId: course_id, progress });
  } else {
    userProgress.progress = progress;
    await userProgress.save();
  }

  res.json({ message: 'Progress updated successfully.', progress: userProgress });
};

module.exports = { getUserProgress, updateUserProgress };
