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

// const getPostById = async (req, res) => {
//   // const id = req.params.id;
//   try {
  
  
//     const findOne = await Tutorial.findOne(req.params.id);

//     if (findOne) {
//       return res.status(200).json({ post });
//     }
//     return res.status(404).send('Post with the specified ID does not exists');
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// }



module.exports = {
  addTutorial,
  getAllTutorial,
  getOneTutorial,
};
