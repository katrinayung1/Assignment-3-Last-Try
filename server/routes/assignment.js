let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with book model
let Assignment = require('../models/assignment');
let assignmentController = require('../controller/assignment');
const assignment = require('../models/assignment');
//CRUD OPERATION

// Read Operation
// Get Route for the assignment list
router.get('/', assignmentController.displayAssignmentList);


//Add Operation
//Get route for displaying the Add-Page -- Create Operation
router.get('/add', assignmentController.displayAddPage);

//Post route for processing the Add-Page -- Create Operation
router.post('/add', assignmentController.processAddPage);

//Edit Operation
//Get route for displaying the Edit operation -- Update Operation
router.get('/edit/:id', assignmentController.displayEditPage);
//Post route for displaying the Add-Page -- Create Operation
router.post('/edit/:id', assignmentController.processEditPage);

//Delete Operation
//Get to perform Delete Operation -- Deletion

router.get('/delete/:id', assignmentController.performDelete);


module.exports=router;