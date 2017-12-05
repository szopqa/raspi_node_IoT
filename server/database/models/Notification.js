var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NotificationSchema = new Schema({
	date : {
		type : Date,
		default : Date.now()
	},
	attachment : String,
	image : {
		data : Buffer,
		contentType : String
	},
	description : {
		time : String,
		body : String
	},
	displayed : {
		type : Boolean,
		default : false
	}
});

module.exports = mongoose.model('Notifications', NotificationSchema);