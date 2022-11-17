let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect with assignment model
let Assignment = require('../models/assignment');

//CRUD OPERATION

// Read Operation
// Get Route for the assignment list
module.exports.displayAssignmentList = (req,res,next)=>{
    Assignment.find((err, assignmentlist)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(assignmentlist);
            res.render('assignment/list',
                {title:'Assignments',
                 Assignmentlist: assignmentlist
            })
        }
    });
}

//Add Operation
//Get route for displaying the Add-Page -- Create Operation
module.exports.displayAddPage = (req,res,next)=>{
    res.render('assignment/add',{title: 'Add Assignment'})

}

//Post route for processing the Add-Page -- Create Operation
module.exports.processAddPage = (req,res,next)=>{
    let newAssignment = Assignment ({
        "subject": req.body.subject,
        "assignment" : req.body.assignment,
        "description" : req.body.description,
        "weight" : req.body.weight,
        "dueDate" : req.body.dueDate
    });
    Assignment.create(newAssignment,(err,Assignment) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/assignment-list');
        }
    })
    
}

//Edit Operation
//Get route for displaying the Edit operation -- Update Operation
module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Assignment.findById(id,(err,assignmentToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('assignment/edit',{title:'Edit Assignment', assignment:assignmentToEdit});
        }
    })
}

//Post route for displaying the Add-Page -- Create Operation
module.exports.processEditPage = (req,res,next)=>{
    let id=req.params.id;
    let updateAssignment = Assignment({
        "_id" : id,
        "subject": req.body.subject,
        "assignment" : req.body.assignment,
        "description" : req.body.description,
        "weight" : req.body.weight,
        "dueDate" : req.body.dueDate
    });
    Assignment.updateOne({_id:id},updateAssignment,(err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/assignment-list');
        }
    })

}

//Delete Operation
//Get to perform Delete Operation -- Deletion
module.exports.performDelete = (req,res,next)=>{
    let id = req.params.id;
    Assignment.deleteOne({_id:id},(err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/assignment-list');
        }
    })
}