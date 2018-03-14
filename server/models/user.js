var mongoose = require('mongoose');

var User = mongoose.model('User', {
	email:{
		type: String,
		required: true,
		minglength: 1,
		trim: true
	}
});

newUser = new User({
	email: "kirby@gmail.com"
});
newUser.save().then((doc) =>{
	console.log('saved new user', doc);
}, (e) =>{
	console.log('unable to add new user');
});

module.exports = {User};