const mailSender = require('./mailSender.js');

const src = 'https://res.cloudinary.com/dtincuylz/image/upload/v1514320361/pcdbbv31mgwmpw5ohnog.jpg'
const date = '2018-01-02T20-04-05.jpg';

mailSender.send(date.replace('.jpg','').replace('T',' '), src);