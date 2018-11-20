const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/Todo');
const {User} = require('../server/models/User');

// Todo.deleteMany({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndDelete({_id: "5bee1eb83b307c7718c07b34"}).then((todo) => {
//     console.log(todo);
// });

Todo.findByIdAndDelete("5bf48aee19502f3e1f97a5bc").then((todo) => {
    console.log(todo);
});