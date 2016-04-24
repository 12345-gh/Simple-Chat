var mongoose = require('mongoose');

var onlineChattersSchema = new mongoose.Schema({
	login: String,
	pass: String,
	nickname: String
});

module.exports = mongoose.model('online-chatters', onlineChattersSchema);