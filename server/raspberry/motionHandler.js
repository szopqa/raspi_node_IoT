var fs = require('fs');

var cameraConfig = require('./cameraConfig.js');
var imageUploader = require('./dataUploader.js');

function getUniqueFilename ( camera ) {
    camera.opts.output = cameraConfig.changeFilename();
}

function capturePhotoWith ( camera ) {

    //Needed because photos were saved multiple times
    var wasSaved = false;

    getUniqueFilename( camera );
    camera.start();

    camera.on("read", function(err, timestamp, capturedPhoto){
        if( ! err ) {
            console.log('Timestamp : ' + timestamp
                + ' filename : ' + capturedPhoto + ' taken!');

            if(!wasSaved){
                imageUploader.uploadImage('./photos/' + capturedPhoto);
                wasSaved = true;
            }
        } else {
            console.log(err);
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