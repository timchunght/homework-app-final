var homeworks = [
    {
        assignment: 'Test First JavaScript',
        url: 'https://github.com/timchunght/FullstackTestFirst',
        status: 'completed'
    }
    
];





var bluebird = require('bluebird');
var mongoose = require('mongoose');

var HomeworkModel = require('./server/models/homework-model');

mongoose.connect('mongodb://localhost/homework-app');

var wipeDB = function () {

    var models = [HomeworkModel];

    models.forEach(function (model) {
        model.find({}).remove(function () {});
    });

    return bluebird.resolve();

};

var seed = function () {

    HomeworkModel.create(homeworks, function (err) {
        if (err) {
            console.error(err);
        }
        console.log('Database seeded!');
        process.kill(0);
    });

};

mongoose.connection.once('open', function () {
    wipeDB().then(seed);
});
