const mongoose = require('mongoose');
var Notifications = require('../database/models/Notification.js');

/* object used for validation before dropping database */
var secret = require('../config/secrets.js');

/*Fetching all notifications from database*/
function getAllNotifictions(req,res) {
    Notifications.find({}, (err, notifications) => {
        if (! err){
            return res.send(notifications);
        }
        return res.status(400).send('Unable to fetch notifications from database');
    });
};
    
/*Fetching single notification from database*/
function getSingleNotification (req,res) {
    var notificationId = req.params.id;

    Notifications.findById(notificationId, (err,notification) => {
        if (! err){
            return res.send(notification);
        }
        return res.status(400).send('Unable to fetch notification with id :' + notificationId);
    })
};

/*Secret endpoint made to easily clear data on database*/
function dropCollection (req,res) {
    var secretKey = req.params.secret;

    if(secretKey === secret.database_drop_key){
        Notifications.remove({}, function(err) {
            res.send('Collection removed!');
        });
    } else {
        res.status(400).send('Validation error');
    }
};

module.exports = {
    getAllNotifictions : getAllNotifictions,
    getSingleNotification : getSingleNotification,
    dropCollection : dropCollection
};