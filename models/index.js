require('dotenv').config();
const mongoose=require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})

const db = mongoose.connection;

//Set up event for database to print connection

db.once('open', ()=>{
    console.log('connect to MongoDB at ${db.host}:${db.port}');
});

db.on('error', (error)=>{
    console.log('Database error', error);
});

//import all of your models
const User = require('./User');

//export all the models from this file
module.exports={
    User
}