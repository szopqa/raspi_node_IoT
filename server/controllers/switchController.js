module.exports = function switchController(app) {

	app.post('/switch/:pinNumber', function (req,res) {

		var pinNumber = req.params.pinNumber;
		var pinShouldBeTurnedOn = req.body.pinShouldBeTurnedOn;

		switch (pinNumber){
			case '7':
				res.send('Pin 7 switched ' +(pinShouldBeTurnedOn ? 'ON' : 'OFF'));
				break;

			case '22':
				res.send('Pin 22 switched ' +(pinShouldBeTurnedOn ? 'ON' : 'OFF'));
				break;

			case '24':
				res.send('Pin 24 switched ' +(pinShouldBeTurnedOn ? 'ON' : 'OFF'));
				break;

			default:
				res.status(400).send('Invalid pin number');
				break;
		}
	});

	app.post('/servo',function (req,res) {

		var servoAction = req.body.servoAction;

		switch (servoAction){

			case 'min':
				res.send('Switched servo position to : min');
				break;

			case 'max':
				res.send('Switched servo position to : max');
				break;
			case 'center':
				res.send('Switched servo position to : center');
				break;

			default :
				res.status(400).send('Invalid servo action');
				break;
		}
	});
};