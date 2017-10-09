function changeSwitchState(req,res) {

	let pinNumber = req.params.pinNumber;

	if( ! req.body )
		return res.sendStatus(400);

	res.send(`PIN ${pinNumber} turned ${(req.body.pinShouldBeTurnedOn ? 'on' : 'off')}`);

}

function getSwitchesState(req,res) {
	res.header("Access-Control-Allow-Origin","*");
	res.send('GET response')
}

module.exports = {
	changeSwitchState : changeSwitchState,
	getSwitchesState : getSwitchesState
};