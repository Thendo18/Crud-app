const Tutorial = require("..//models/tutorial.model");
const sequelizeConnection = require("../../config/db.config.js");

const addTutorial = async (req, res) => {
  try {
    // CONNECT TO THE bodyBASE
    await sequelizeConnection.authenticate();

    // SYNC THE USER MODEL TO THE USERS TABLE
    Tutorial.sync({ alter: true });

    // // const add = await models.Tutorial.add(req.body);
    const create = await Tutorial.create(req.body);
    return res.status(201).json({
      create,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllTutorial = async (req, res) => {
  try {
    // CONNECT TO THE bodyBASE
    await sequelizeConnection.authenticate();

    // SYNC THE USER MODEL TO THE USERS TABLE
    Tutorial.sync({ alter: true });

    // // const add = await models.Tutorial.add(req.body);
    const findAll = await Tutorial.findAll(req.body);
    return res.status(201).json({
      findAll,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//getOneTutorial
const getOneTutorial = async (req, res) => {
  const id = req.params.id;
  try {
    // CONNECT TO THE bodyBASE
    await sequelizeConnection.authenticate();

    // SYNC THE USER MODEL TO THE USERS TABLE
    Tutorial.sync({ alter: true });

    // // const add = await models.Tutorial.add(req.body);
    const findByPk = await Tutorial.findByPk(id);
    return res.status(201).json({
      findByPk,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addTutorial,
  getAllTutorial,
  getOneTutorial,
};
