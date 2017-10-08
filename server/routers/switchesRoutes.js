let switchesController = require('../controllers/switchesController.js');

function switchesRoutes(app) {

	app.route('/switch/:pinNumber')
		.post(switchesController.changeSwitchState)

	app.route('/switch')
		.get(switchesController.getSwitchesState)
}

module.exports = {
	switchesRoutes : switchesRoutes
};