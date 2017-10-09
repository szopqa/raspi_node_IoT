const fs = require('fs');

const filePath = __dirname + '/status.json';

function getPinsStatus() {
	return JSON.parse( fs.readFileSync(filePath) );
}


function updatePinState(updatedPin) {

	var currentStatus = getPinsStatus();

	currentStatus.push(updatedPin);
	console.log(currentStatus);

	JSON.stringify(currentStatus);

	fs.writeFileSync('./raspberry_controllers/pins_status/status.json',currentStatus);
}

module.exports = {
	getPinsStatus : getPinsStatus,
	updatePinState : updatePinState,
};