var mongoose = require('mongoose');

const config = require('../config/secrets.js');

module.exports = function () {

    mongoose.connect(
        'mongodb://'+config.db.username+':'+config.db.password+'@ds149855.mlab.com:49855/iot_raspi');
    mongoose.Promise = global.Promise;

    var db = mongoose.connection;

    db.once('open', function () {
        return console.log('Connected to ' + config.db.databaseName + ' database');
    });

    db.on('error', function (err) {
        return console.log(err);
    });
};