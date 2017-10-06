let controllsController = require('../controllers/controllsController');

function controllingRouters (app) {

	app.route('/controll')
		.get(controllsController.handleStateChange())
}

module.exports = {
	controllingRouters : controllingRouters()
}