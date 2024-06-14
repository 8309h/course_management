const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../config/dbConfig');

const Course = sequelize.define('Course', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: true },
  teacherId: { type: DataTypes.INTEGER, allowNull: false }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Course;
