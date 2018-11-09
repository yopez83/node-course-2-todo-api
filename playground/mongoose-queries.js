const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todo');
const {User} = require('./../server/models/User');

// var id = '5bd27885a46fbd2a88c1f8411';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid')
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById('5bd27885a46fbd2a88c1f848').then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }

//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById('5bb2ed9ac46e061c5bcbbd85').then((user) => {
    if(!user){
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user,undefined,2));
}, (e) => {
    console.log(e)
});