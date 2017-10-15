module.exports = function switchController(app,pins) {

	app.post('/switch/:pinNumber', function (req,res) {

		var pinNumber = req.params.pinNumber;
		var pinShouldBeTurnedOn = req.body.pinShouldBeTurnedOn;

		switch (pinNumber){
			case '7':
				pinShouldBeTurnedOn ? pins.led7.on() : pins.led7.off();
				res.send('Pin 7 switched ' +(pins.led7.isOn ? 'ON' : 'OFF'));
				break;

			case '22':
				pinShouldBeTurnedOn ? pins.led22.on() : pins.led22.off();
				res.send('Pin 22 switched ' +(pins.led22.isOn ? 'ON' : 'OFF'));
				break;

			case '24':
				pinShouldBeTurnedOn ? pins.led24.on() : pins.led24.off();
				res.send('Pin 24 switched ' +(pins.led24.isOn ? 'ON' : 'OFF'));
				break;

			default:
				res.status(400).send('Invalid pin number');
				break;
		}
	});


	app.get('/switch', function (req,res) {

		res.send({
			isPin7On : pins.led7.isOn,
			isPin24On : pins.led24.isOn,
			isPin22On : pins.led22.isOn,
		})
	});

};