const mongoose = require('mongoose');

var notificationSchema = Schema({
	date : {
		type : Date,
		default : Date.now()
	},
	attachment : String,
	description : String,
	displayed : {
		type : Boolean,
		default : false
	}
});

module.exports({
	notificationSchema : notificationSchema
});