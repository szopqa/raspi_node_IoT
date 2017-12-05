const mongoose = require('mongoose');
var Notifications = require('../database/models/Notification.js');

//simple object used for validation before clearing database
var secret = require('../config/secret.js');

module.exports = function (app) {

    // const contentType = 'image/jpg';

    /*Fetching all notifications from database*/
    app.get('/notifications', function (req,res) {
        Notifications.find({}, (err, notifications) => {
            if (! err){
                return res.send(notifications);
            }
            return res.status(400).send('Unable to fetch notifications from database');
        });
    });
    
    /*Fetching single notification from database*/
    app.get('/notifications/:id', function (req,res) {
        var notificationId = req.params.id;

        Notifications.findById(notificationId, (err,notification) => {
            if (! err){
                return res.send(notification);
            }
            return res.status(400).send('Unable to fetch notification with id :' + notificationId);
        })
    });

    app.get('/notifications/delete/:secret', function (req,res) {
        var secretKey = req.params.secret;

        if(secretKey === secret.key){
            Notifications.remove({}, function(err) {
                res.send('Collection removed!');
            });
        } else {
            res.status(400).send('Validation error');
        }
    })
};