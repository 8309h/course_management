const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoute');
const progressRoutes = require('./routes/progressRoute');
const { sequelize } = require('./config/dbConfig');
const {connectionToDB} =  require('./config/dbConfig')
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {

    try{
        res.send("welcome")
    }catch(e){
        console.log(e.message)
    }
  });
app.use('/user', userRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1', progressRoutes);


// Function to initialize server
async function startServer() {
    await connectionToDB(); 
  
    // Sync all models
    await sequelize.sync();
  
    // Start the server
    app.listen(process.env.ORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  }
  
  // Start the server
  startServer();


