var j5 = require('johnny-five');
var raspi = require('raspi-io');

var switchController = require('../controllers/switchController.js');

module.exports = function (app) {

	var board = new j5.Board({
		io : new raspi()
	});

	board.on('ready', function () {

		var pins = {
			led7 : new j5.Led('P1-7'),
			led24 : new j5.Led('P1-24'),
		};

		switchController(app,pins);
	});
};