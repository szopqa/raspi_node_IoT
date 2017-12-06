const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const mongoConnectionEstablisher = require('./database/mongoConnectionEstablisher.js');
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
mongoConnectionEstablisher();

require('./raspberry/raspberry.js') (app);

const PORT = process.env.PORT || 3000;
app.listen(PORT,function () {
	console.log('Server started at port ' + PORT);
});