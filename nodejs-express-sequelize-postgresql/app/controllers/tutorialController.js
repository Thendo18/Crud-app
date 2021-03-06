const Tutorial = require("..//models/tutorial.model");
const sequelizeConnection = require("../../config/db.config.js");


const addTutorial = async (req, res) => {
  try {
    // CONNECT TO THE bodyBASE
    await sequelizeConnection.authenticate();

    // SYNC THE USER MODEL TO THE tutorials TABLE
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

    // SYNC THE USER MODEL TO THE tutorials TABLE
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



const getOneTutorial = async (req, res) => {
  try {
    // const id = req.params.id;
    // CONNECT TO THE bodyBASE
    await sequelizeConnection.authenticate();

    // SYNC THE USER MODEL TO THE tutorials TABLE
    Tutorial.sync({ alter: true });

    // // const add = await models.Tutorial.add(req.body);
    const findOne = await Tutorial.findByPk(req.params.id);
    return res.status(201).json({
      findOne,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


//update Tutorial
const updateTutorial = async (req, res) => {
  try {
    // const id = req.params.id;
    // CONNECT TO THE bodyBASE
    await sequelizeConnection.authenticate();

    // SYNC THE USER MODEL TO THE tutorials TABLE
    Tutorial.sync({ alter: true });
    const update = await Tutorial.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(201).json({
      update,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });

  }
}


//delete Tutorial
const deleteTutorial = async (req, res) => {
  try {
    // const id = req.params.id;
    // CONNECT TO THE bodyBASE
    await sequelizeConnection.authenticate();

    // SYNC THE USER MODEL TO THE tutorials TABLE
    Tutorial.sync({ alter: true });
    
    const destroy = await Tutorial.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.status(201).json({
      destroy,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}


module.exports = {
  addTutorial,
  getAllTutorial,
  getOneTutorial,
  updateTutorial,
  deleteTutorial,
};
