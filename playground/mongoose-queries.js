const {ObjectID} = require('mongodb'); 
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


var id = '5aa92b67d27b5e2f80a62bed';

if(!ObjectID.isValid(id)){
	console.log('ID not valid');
}

// // Todo.find({
// // 	_id: id
// // }).then((todos)=>{
// // 	console.log('Todos',todos);
// // });

// // Todo.findOne({
// // 	_id: id
// // }).then((todo)=>{
// // 	console.log('Todos',todo);
// // });

// Todo.findById(id).then((todo)=>{
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todos',todo);
// }).catch((e)=>console.log(e));

User.findById(id).then((user)=>{
	if(!user){
		return console.log('User not found');
	}
	console.log('User',user);
}).catch((e)=>console.log(e));