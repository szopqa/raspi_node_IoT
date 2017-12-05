var cloudinary = require('cloudinary');

var Notification = require('../database/models/Notification.js');
var notificationFormatter = require('../utils/notificationFormatter.js');

const cloudinaryData = require('../config/secrets.js').cloudinaryData;

cloudinary.config({
    cloud_name: cloudinaryData.cloud_name,
    api_key: cloudinaryData.api_key,
    api_secret: cloudinaryData.api_secret
});

function uploadImage (filepath) {
    cloudinary.uploader.upload(filepath, function(result) {
        uploadNotification(filepath, result.secure_url)
    });
};

function uploadNotification(filepath, imageURL) {

    var notification = new Notification();
        notification.description.time = notificationFormatter.formatNotificationDate(filepath);
        notification.description.body = 'Someone entered protected area!';
        notification.attachment = imageURL;

    notification.save(function (err,notification) {
        if(!err)
            console.log('Saved ' + filepath + ' to database');
        else
            console.log(err);
    })
}

module.exports = {
    uploadImage : uploadImage,
    uploadNotification : uploadNotification
}