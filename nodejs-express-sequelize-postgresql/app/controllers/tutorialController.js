const Tutorial = require('..//models/tutorial.model');
const sequelizeConnection = require("../../config/db.config.js");


const addTutorial = async (req, res) => {
  try {

  
    // CONNECT TO THE DATABASE
    await sequelizeConnection.authenticate();

    // SYNC THE USER MODEL TO THE USERS TABLE
    Tutorial.sync({ alter: true });



    // // const add = await models.Tutorial.add(req.body);
    const create = await Tutorial.create(req.body);
    return res.status(201).json({
      create,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const getAllTutorial = async (req, res) => {
  try {

  
    // CONNECT TO THE DATABASE
    await sequelizeConnection.authenticate();

    // SYNC THE USER MODEL TO THE USERS TABLE
    Tutorial.sync({ alter: true });



    // // const add = await models.Tutorial.add(req.body);
    const findAll = await Tutorial.findAll(req.body);
    return res.status(201).json({
      findAll,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}


//get getOneTutorial by id
const getOnetutorial = async (req, res) => {
  try {
    const { id } = req.params;
    const getOneTutorial = await models.getOneTutorial.findOne({
      where: { id: $1 },
      // include: [
      //   {
      //     model: models.Comment,
      //     as: 'comments',
      //     include: [
      //      {
      //       model: models.User,
      //       as: 'author',
      //      }
      //     ]
      //   },
      //   {
      //     model: models.User,
      //     as: 'author'
      //   }
      // ]
    });
    if (getOneTutorial) {
      return res.status(200).json({ getOneTutorial });
    }
    return res.status(404).send('getOneTutorial with the specified ID does not exists');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  addTutorial,
  getAllTutorial,
  getOnetutorial
}