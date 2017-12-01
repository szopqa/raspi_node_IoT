const mongoose = require('mongoose');

var notificationSchema = mongoose.Schema({
	date : {
		type : Date,
		default : Date.now()
	},
	attachment : String,
	image : {
		data : Buffer,
		contentType : String
	},
	description : String,
	displayed : {
		type : Boolean,
		default : false
	}
});

var Notification = module.exports = mongoose.model('Notifications',notificationSchema);