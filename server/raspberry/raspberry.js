var j5 = require('johnny-five');
var raspi = require('raspi-io');
var RaspiCam = require('raspicam');

var cameraConfig = require('./cameraConfig.js');

var switchController = require('../controllers/switchController.js');
var notificationController = require('../controllers/notificationsController.js');
var streamController = require('../controllers/streamController.js');
var motionHandler = require('./motionHandler.js');

module.exports = function (app) {

	var board = new j5.Board({
		io : new raspi()
	});

	board.on('ready', function () {

		var pins = {
			pin7 : new j5.Led('P1-7'),
			pin24 : new j5.Led('P1-24'),
			pin22 : new j5.Led('P1-22'),
			servoHorizontal : new j5.Servo({
				pin : 'P1-33',
				range : [0,180],
				fps : 1,
				center : true,
			}),
            servoVertical : new j5.Servo({
                pin : 'P1-12',
                type : 'continuous',
                range : [0,70],
                center : true,
            }),
			motion : new j5.Motion('P1-37'),
			camera : new RaspiCam( cameraConfig.parameters )
		};

		/*HTTP controllers*/
		switchController(app,pins);
		notificationController(app);
        streamController(app);

		motionHandler(pins);
	});
};