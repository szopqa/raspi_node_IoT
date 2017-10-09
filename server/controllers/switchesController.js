let pinSwitcher = require('../raspberry_controllers/pinSwitcher.js');
let pinsStatus = require('../raspberry_controllers/pinsStatus/pinsStatus.js');

function changeSwitchState(req,res) {

	let pinNumber = req.params.pinNumber;

	if( ! req.body)
		return res.sendStatus(400);

	//Changing state of chosen pin
	pinSwitcher.switchPin(pinNumber,req.body.pinShouldBeTurnedOn);
	res.send(`PIN ${pinNumber} turned ${(req.body.pinShouldBeTurnedOn ? 'on' : 'off')}`);
}

function getSwitchesState(req,res) {
	res.send('Get response');
	console.log(pinsStatus.getPinsStatus());
}

module.exports = {
	changeSwitchState : changeSwitchState,
	getSwitchesState : getSwitchesState
};