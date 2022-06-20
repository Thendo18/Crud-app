const { Router } = require("express");
const tutorialController = require("../controllers/tutorialController");
const router = Router();

//Add a tutorial
router.post('/addTutorial', tutorialController.addTutorial);


//Delete a tutorial
router.delete('/deleteTutorial/:id', tutorialController.deleteTutorial);


// Updates a tutorial 
router.put('/updateTutorial/:id', tutorialController.updateTutorial);



//Gets One tutorial by id
router.get('/getOneTutorial/:id', tutorialController.getOneTutorial);

//Gets All tutorial
router.get('/getAllTutorial', tutorialController.getAllTutorial);

module.exports = router;