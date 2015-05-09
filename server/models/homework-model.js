var mongoose = require('mongoose');

var schema = new mongoose.Schema({

		assignment: String,
    url: String,
    status: String
    
});

module.exports = mongoose.model('Homework', schema);