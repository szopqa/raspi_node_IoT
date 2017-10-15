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
			led22 : new j5.Led('P1-22'),
			servo : new j5.Servo({
				pin : 'P1-33',
				type : 'continuous',
				range : [0,360],
				center : true,
			}),
		};
		switchController(app,pins);
	});
};