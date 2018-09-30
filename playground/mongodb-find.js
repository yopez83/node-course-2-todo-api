const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // var todos = db.collection('Todos').find({
    //     _id: new ObjectID('5bb04d3d45c1a60b15e2e277')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // var todos = db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    var todos = db.collection('Users').find({name: 'Yadel'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

    var todos = db.collection('Users').find({name: 'Yadel'}).count().then((count) => {
        console.log(`Users found: ${count}`);
    }, (err) => {
        console.log('Unable to fetch users count', err);
    });

    client.close();
});