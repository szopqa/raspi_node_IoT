const fs = require('fs');

const filePath = __dirname + '/status.json';

function getPinsStatus() {
	return JSON.parse( fs.readFileSync(filePath) );
}


function updatePinState(updatedPin) {

	let currentStatus = getPinsStatus();

	currentStatus.push(updatedPin);
	console.log(currentStatus);

	JSON.stringify(currentStatus);

	fs.writeFileSync('./raspberry_controllers/pinsStatus/status.json',currentStatus);
}

module.exports = {
	getPinsStatus : getPinsStatus,
	updatePinState : updatePinState,
};