var mongoose = require('mongoose');


var Todo = mongoose.model('Todo', {
	text:{
		type: String,
		required: true,
		minglength: 1,
		trim: true
	},
	date: {
		type: Number
	},
	completed:{
		type: Boolean,
		default: false
	},
	completedAt:{
		type: Number,
		default: null
	}
});

module.exports = {Todo};