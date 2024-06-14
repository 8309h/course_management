const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, 'root', process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
        connectTimeout: 86400
    }
});

async function connectionToDB() {
    try {
        await sequelize.authenticate();
        console.log("Connected to the Database successfully!");
    } catch (e) {
        console.error(e.message);
    }
}

connectionToDB();

module.exports = {
    connectionToDB, sequelize
};
