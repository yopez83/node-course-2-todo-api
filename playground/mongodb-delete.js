const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete todos', err);
    // });

    // // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete todo', err);
    // });

    // // findOneAndDelte
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete todo', err);
    // });

    // deleteMany Users
    db.collection('Users').deleteMany({name: 'Yadel'}).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete users', err);
    });

    // findOneAndDelete user
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5bb0519bb5a97b0b28b92646')
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to find and delete the user', err);
    });

    client.close();
});