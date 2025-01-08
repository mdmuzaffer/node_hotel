const mongoose = require('mongoose');
require('dotenv').config();
const mongoDB_URL = process.env.DB_URL;
const mongoDB_URL_local = process.env.DB_URL_LOCAL;
//const mongoUrl = 'mongodb://127.0.0.1:27017/hotels';
const mongoUrl = mongoDB_URL;
//const mongoUrl = mongoDB_URL_local;

// Connection options (optional)
const options = {
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true, // Use the new Server Discover and Monitoring engine
  };

mongoose.connect(mongoUrl);
const db = mongoose.connection;

db.on('connected', () => {
    console.log('Mongoose connected to the database succesfuly');
  });
  
  db.on('error', err => {
    console.error('Mongoose connection error:', err);
  });
  
  db.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });

module.exports = db;