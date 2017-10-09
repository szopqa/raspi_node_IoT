function changeSwitchState(req,res) {

	let pinNumber = req.params.pinNumber;

	if( ! req.body )
		return res.sendStatus(400);


	if (req.body.pinShouldBeTurnedOn ){
		res.send(`PIN ${pinNumber} turned on`);
	} else {
		res.send(`PIN ${pinNumber} turned off`);
	}

}

function getSwitchesState(req,res) {
	res.header("Access-Control-Allow-Origin","*");
	res.send('GET response')
}

module.exports = {
	changeSwitchState : changeSwitchState,
	getSwitchesState : getSwitchesState
};