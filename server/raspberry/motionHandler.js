var cameraConfig = require('./cameraConfig.js');

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