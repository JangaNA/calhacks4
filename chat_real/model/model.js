var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// mongoose.connect("mongodb://localhost:27017/chat");
mongoose.connect("mongodb://raymondhfeng:123turdie@cluster0-shard-00-00-uxht7.mongodb.net:27017,cluster0-shard-00-01-uxht7.mongodb.net:27017,cluster0-shard-00-02-uxht7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin");

mongoose.connection.on('open', function (ref) {
    console.log('Connected to mongo server.');
});
mongoose.connection.on('error', function (err) {
    console.log('Could not connect to mongo server!');
    console.log(err);
});

// mongoose.connect('mongodb://localhost/mongodb');
mongoose.connect("mongodb://raymondhfeng:123turdie@cluster0-shard-00-00-uxht7.mongodb.net:27017,cluster0-shard-00-01-uxht7.mongodb.net:27017,cluster0-shard-00-02-uxht7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin");

module.exports.user=mongoose.model('User',new Schema({
    name:String,
    handle: String,
    password: String,
    phone:String,
    email:String,
    friends:[]
},{strict: false}));
module.exports.online=mongoose.model('online',new Schema({
    handle:String,
    connection_id:String
}));
module.exports.messages=mongoose.model('message',new Schema({
    message : String,
    sender  : String,
    reciever: String,
    date    : Date
}));