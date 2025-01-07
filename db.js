const mongoose = require('mongoose');
const mongoUrl = 'mongodb://127.0.0.1:27017/hotels';

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