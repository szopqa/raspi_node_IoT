var five = require('johnny-five');
var Raspi = require('raspi-io');

var pinsStatus = require('./pins_status/pinsStatus.js');

var board = new five.Board({
		io : new Raspi()
	});

function switchPin(pinNumber, pinShouldBeTurnedOn) {
/*
	
	board.on('ready',function () {

		let pin = new five.Pin(pinNumber);
		pin.write((pinShouldBeTurnedOn ? 1 : 0));

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
	
*/

	board.on('ready',function () {
		(new five.Led('P1-7')).strobe();
	})
}

module.exports = {
	switchPin : switchPin
};