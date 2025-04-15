const { Sequelize } = require("sequelize")
 
const sequelize = new Sequelize(
    "crud_porto_rico", 
    "root", 
    "root", 
    {
        host: "localhost", 
        port: 3306, 
        dialect: "mysql",
        logging: false
    }
);
 
module.exports = sequelize;
 