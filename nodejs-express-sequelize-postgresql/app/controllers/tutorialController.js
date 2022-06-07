// const sequelizeConnection = require("../config/db.config.js");
// //get title model
// const title_model = require('../models/title.model');

module.exports.titleController = {
  
  title: async (req, res) => {

    try {
      const tutorialtitle = req.params.tutorialtitle;

      //query from title
      const title = await sequelizeConnection.query(`select t.title_id,title_name,title_desc,c.course_name 
              from title t,tutorial c 
              where t.tutorial_id = c.tutorial_id 
              AND c.tutorial_title='${tutorialtitle}' order by t.title_id`);

      if(!title[0].length) {
          throw new Error('tutorial  title is not recognized.')
      }
  
      console.log("title: ", title[0]);
      res.status(200).json({error: null, title: title[0]});

    } catch(error) {
      console.log(error)
      res.status(400).json({error: error.message, title: []})
    }
  
  },

  tutorials: async (req, res) => {
    try {

        const title_id = req.params.title_id;
        //query from tutorial table
        const tutorial = await sequelizeConnection.query(
          `select * from tutorials where title_id = ${title_id} order by tutorial_id`
        );
        console.log("tutorial: ", tutorial[0]);

        if( !tutorial[0] ) {
            throw new Error('tutorial is not recognized')
        }

        res.status(200).json(tutorial[0]);

    }catch(error) {
      console.log(error)
      res.status(400).json(error.message)
    }
   
  }

  
};
