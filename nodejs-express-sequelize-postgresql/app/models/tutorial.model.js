module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
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
    return Tutorial;
  };