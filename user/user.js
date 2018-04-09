// User.js -- You�re creating a schema which 
// will give every user in the database a specific look.
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: String,
	longitude: Number,
	latitude: Number,
	rating: Number
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');