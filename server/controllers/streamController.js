const exec = require('child_process').exec;

module.exports = function (app) {

    app.post('/stream/', function (req, res) {
        var streamShouldBeTurnedOn = req.body.streamShouldBeTurnedOn;

        var script = '';
        if (streamShouldBeTurnedOn){
            script = 'cd /home/pi/mmal/ && sudo motion -c motion-mmalcam.conf'
        } else {
            script = 'cd /home/pi/mmal/ && sudo service motion restart'
        }

        exec(script , function (error, stdout, stderr) {
            if (! error){
                res.send('Stream turned ' + ( streamShouldBeTurnedOn ? 'on!' : 'off!') + stdout);
            } else {
                res.status(400).send(error, stderr);
            }
        });
    });
};