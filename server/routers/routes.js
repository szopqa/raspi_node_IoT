const streamController = require('../controllers/streamController.js');
const notificationsController = require('../controllers/notificationsController.js');

module.exports = function (app) {

    /*
    app.route('/switch')
        .get()

    app.route('/switch/:pinNumber')
        .post()

    app.route('/servo')
        .post()
    */

    app.route('/notifications')
        .get(notificationsController.getAllNotifictions)

    app.route('/notifications/:id')
        .get(notificationsController.getSingleNotification)

    app.route('/notifications/delete/:secret')
        .get(notificationsController.dropCollection)

    app.route('/stream')
        .post(streamController.toggleStream)

};