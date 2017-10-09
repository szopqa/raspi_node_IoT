var five = require('johnny-five');
var Raspi = require('raspi-io');

var pinsStatus = require('./pins_status/pinsStatus.js');

function switchPin(pinNumber, pinShouldBeTurnedOn) {

	var board = new five.Board({
		io : new Raspi()
	});


	board.on('ready',function () {

		var led = new five.Led('P1-' + pinNumber);

		pinShouldBeTurnedOn ? led.on() : led.of();

		let pinSwitched = {
			pinNumber : pinNumber,
			state : (pinShouldBeTurnedOn ? 1 : 0),
		};
		//pins_status.updatePinState(pinSwitched);
	});

	//testing purpose
	let pinSwitched = {
		pinNumber : pinNumber,
		state : (pinShouldBeTurnedOn ? 1 : 0),
	};
	//pins_status.updatePinState(pinSwitched);

}

module.exports = {
	switchPin : switchPin
};
