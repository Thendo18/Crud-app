const { Router } = require("express");
const tutorialController = require("../controllers/tutorialController");
const router = Router();

//Add a tutorial
// router.post('/addTutorial', tutorialController.addTutorial);
router.post('/addTutorial', tutorialController.addTutorial);
// //Delete a tutorial
// router.delete('/deleteTutorial/:id', tutorialController.deleteTutorial);

// // Updates a tutorial 
// router.put('/updateTutorial/:id', tutorialController.updateTutorial);

// // Gets all the Tutorial
// router.get('/getAllTutorial', tutorialController.getAllTutorial);

// //Gets One tutorial
router.get('/getOneTutorial/:id', tutorialController.getOnetutorial)
// router.get('/posts/:postId', tutorialcontrollers.getPostById);
// // app.use('/tutorial',require('./app/routes/tutorials.js'));

router.get('/getAllTutorial', tutorialController.getAllTutorial);

module.exports = router;