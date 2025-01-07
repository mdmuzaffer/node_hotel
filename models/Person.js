const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum: ['cheif','waiter', 'manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    sallary:{
        type: Number,
        required:true
    }
});

const Person = mongoose.model('Person', personSchema, 'person');
module.exports = Person;