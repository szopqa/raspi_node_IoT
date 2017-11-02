var j5 = require('johnny-five');
var raspi = require('raspi-io');
var RaspiCam = require('raspicam');

var switchController = require('../controllers/switchController.js');

module.exports = function (app) {

	var board = new j5.Board({
		io : new raspi()
	});

	var camera = new RaspiCam({
		mode : 'photo',
		output : new Date()
				 .toISOString()
				 .replace(/T/, ' ')
				 .replace(/\..+/, ''),
		width : 640,
		height : 480,
		quality : 100,
		encoding : 'jpg',

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