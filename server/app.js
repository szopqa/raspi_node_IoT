const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routers/switchesRoutes.js');
const config = require('../client/src/config/config.js');

const app = express();

app.use(bodyParser.json());
app.use(function (req, res, next) {
	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

	// Allowed request methods
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	// Allowed request headers
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

//Requests router
router.switchesRoutes(app);


const PORT = process.env.PORT || 8888;
app.listen(PORT, function () {
	console.log('Server started on port ' + PORT + ' ...');
});

module.exports = {
	app : app
};