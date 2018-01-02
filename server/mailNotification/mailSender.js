'use strict';
const nodemailer = require('nodemailer');

const config = require('../config/secrets.js');
const messageGenerator = require('./messageGenerator.js');

//TODO : move to global config
const webAppAddress = 'localhost:3000';

module.exports = (function(){

    //setup
    var smtpTransporter = nodemailer.createTransport({
        service: "Gmail",
        auth: config.mailSender.auth
    });

    const send = function(notificationDate, image){

        var mailOptions = {
            from: 'Smart monitoring system 👻',
            to: 'szopqa96@gmail.com',
            subject: 'System activity : ' + notificationDate,
            html: messageGenerator.getEmailBody(notificationDate, image, webAppAddress)
        };

        smtpTransporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Mail notification sent: %s', info.messageId);
        });
    };

    return{
        send
    }

})();