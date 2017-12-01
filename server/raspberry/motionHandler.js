var fs = require('fs');

var cameraConfig = require('./cameraConfig.js');
var Notification = require('../database/models/Notification.js');

function getUniqueFilename ( camera ) {
    camera.opts.output = cameraConfig.changeFilename();
}

function capturePhotoWith ( camera ) {
    getUniqueFilename( camera );
    camera.start();
    camera.on("read", function(err, timestamp, filename){
        if( ! err ){
            console.log('Timestamp : ' + timestamp
                    + ' filename : ' + filename + ' taken!');

            var notification = new Notification();
                notification.description = filename;
                notification.image.data = fs.readFileSync('./photos/'+filename);
                notification.image.contentType = 'image/jpg';

            notification.save(function (err,notification) {
                if(!err)
                    console.log('Saved ' + notification + ' to mongoDB');

            })
        }
    });
}

module.exports = function(pins) {
    pins.motion.on('motionstart',function(){
        console.log('Motion detected!');
        pins.pin7.toggle();

        capturePhotoWith( pins.camera );
    })
};