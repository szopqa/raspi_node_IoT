const express = require('express');

const {controllingRouters} = require('./routers/controllingRoutes');

const app = express();

controllingRouters(app);

const PORT = 3000;
app.listen(PORT, function () {
	console.log('Server started on port ' + PORT + ' ...');
});

module.exports = {
	app : app
};