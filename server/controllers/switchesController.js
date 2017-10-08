function changeSwitchState(req,res) {

	let pinNumber = req.params.pinNumber;

	if( ! req.body.pinShouldBeTurnedOn )
		return res.sendStatus(400);

	//testing purpose
	res.send(JSON.stringify(req.body) + '  ' + pinNumber + ' ' + req.body.pinShouldBeTurnedOn);
}

function getSwitchesState(req,res) {
	res.send('GET response')
}

module.exports = {
	changeSwitchState : changeSwitchState,
	getSwitchesState : getSwitchesState
};