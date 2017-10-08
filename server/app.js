const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routers/switchesRoutes.js');

const app = express();
app.use(bodyParser.json());


router.switchesRoutes(app);


const PORT = process.env.PORT || 8888;
app.listen(PORT, function () {
	console.log('Server started on port ' + PORT + ' ...');
});

module.exports = {
	app : app
};