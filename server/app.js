const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const config = require('./config/secrets.js');

const app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Allowed request methods
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// Allowed request headers
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

/*Connecting to database*/
mongoose.connect(
    'mongodb://'+config.db.username+':'+config.db.password+'@ds149855.mlab.com:49855/iot_raspi');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.once('open',function () {
	console.log('Connected to ' + config.db.databaseName + ' database');
});
db.on('error',function (err) {
	console.log(err);
});

require('./raspberry/raspberry.js') (app);

const PORT = process.env.PORT || 3000;
app.listen(PORT,function () {
	console.log('Server started at port ' + PORT);
});