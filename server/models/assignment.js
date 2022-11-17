let mongoose = require('mongoose');

// create book model
let assignmentModel = mongoose.Schema({
    subject: String,
    assignment: String,
    description: String,
    weight: Number,
    dueDate: String
    },
    {
        collection: "assignment"
    }
);
module.exports = mongoose.model('assignment', assignmentModel);

