const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoute');
const progressRoutes = require('./routes/progressRoute');
const { sequelize, connectionToDB } = require('./config/dbConfig');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Welcome to course management");
});

app.use('/api/v1/users', userRoutes); // Changed '/user' to '/api/v1/users' to maintain consistency with versioning
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/progress', progressRoutes);

// Function to initialize server
async function startServer() {
  await connectionToDB(); 

  // Sync all models
  await sequelize.sync();

  // Start the server
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
}

// Start the server
startServer();
