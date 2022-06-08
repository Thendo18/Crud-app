const Sequelize = require('sequelize');
const DataTypes = Sequelize;
const sequelizeConnection = require("../../config/db.config.js");



    const Tutorial = sequelizeConnection.define("tutorials", {
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      },

      createdAt:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW

      },

      updatedAt:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });


    module.exports = Tutorial;
