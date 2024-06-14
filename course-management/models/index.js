const User = require('../models/User');
const Course = require('../models/Course');
const Progress = require('../models/Progress');

// Relationships
User.hasMany(Course, { foreignKey: 'teacherId' });
Course.belongsTo(User, { foreignKey: 'teacherId' });

User.belongsToMany(Course, { through: Progress, foreignKey: 'userId' });
Course.belongsToMany(User, { through: Progress, foreignKey: 'courseId' });

module.exports = { User, Course, Progress };
