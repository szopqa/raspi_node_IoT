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

	app.post('/servo/:servoNumber',function (req,res) {

		const availableServos = ['servoVertical', 'servoHorizontal'];

		var servoAction = req.body.servoAction;
		var servoToManipulate = availableServos[ req.params.servoNumber ];

		switch (servoAction){
			case 'min':
				pins[servoToManipulate].min();
				res.send('Switched servo ' + servoToManipulate + ' position to : min');
				break;

			case 'max':
                pins[servoToManipulate].max();
				res.send('Switched servo ' + servoToManipulate + ' position to : max');
				break;
			case 'center':
                pins[servoToManipulate].center();
				res.send('Switched servo ' + servoToManipulate + ' position to : center');
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