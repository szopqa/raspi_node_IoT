module.exports = function switchController(app,pins) {

	app.post('/switch/:pinNumber', function (req,res) {

		//Extratcting data from request
		var pinNumber = req.params.pinNumber;
		var pinShouldBeTurnedOn = req.body.pinShouldBeTurnedOn;

		var pinToChange = pins['pin' + pinNumber];

		if(! pinToChange )
			return res.status(400).send('Invalid pin number!');

		if (pinShouldBeTurnedOn){
			pinToChange.on();
			res.status(200).send('Pin ' + pinNumber + ' switched ON!')
		} else {
			pinToChange.off();
			res.status(200).send('Pin ' + pinNumber + ' switched OFF!')
		}
	});

	app.post('/servo',function (req,res) {

		var servoAction = req.body.servoAction;

		switch (servoAction){

			case 'min':
				pins.servo.min();
				res.send('Switched servo position to : min');
				break;

			case 'max':
				pins.servo.max();
				res.send('Switched servo position to : max');
				break;
			case 'center':
				pins.servo.center();
				res.send('Switched servo position to : center');
				break;

			default :
				res.status(400).send('Invalid servo action');
				break;
		}
	});

	app.get('/switch', function (req,res) {

		res.send({
			isPin7On : pins.pin7.isOn,
			isPin24On : pins.pin24.isOn,
			isPin22On : pins.pin22.isOn,
		})
	});
};