const expect = require('expect');
const request = require('supertest');

const app = require('../app.js').app;
const controller = require('../controllers/switchesController.js');

describe('POST /switch/:pinNumber',function () {
	
	it('Should return 404 when request does not have a body',function (done) {

		request(app)
					.post('/switch/1',controller.changeSwitchState)
					.expect(400)
					.end(done);
	})

});


describe('GET /switch',function () {

	//By now it does anything more
	it('Should return 200 when requesting with GET method', function (done) {
		request(app)
					.get('/switch',controller.getSwitchesState)
					.expect(200)
					.end(done);
	})
});
