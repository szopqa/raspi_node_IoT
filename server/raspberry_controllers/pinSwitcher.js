const five = require('johnny-five');
const Raspi = require('raspi-io');

let pinsStatus = require('./pinsStatus/pinsStatus.js');

let board = new five.Board({
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
		//pinsStatus.updatePinState(pinSwitched);
	});

	//testing purpose
	let pinSwitched = {
		pinNumber : pinNumber,
		state : (pinShouldBeTurnedOn ? 1 : 0),
	};
	//pinsStatus.updatePinState(pinSwitched);
	
*/

	board.on('ready',function () {
		(new five.Led('P1-7')).strobe();
	})
}

module.exports = {
	switchPin : switchPin
};