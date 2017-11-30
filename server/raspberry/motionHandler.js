module.exports = function(pins) {
    pins.motion.on('motionstart',function(){
        pins.pin7.toggle();
        console.log('Motion detected!');
    })
}