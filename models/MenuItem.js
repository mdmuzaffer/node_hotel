const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    test:{
        type: String,
        enum: ['sweet','spicy', 'sour'],
        required:true
    },
    is_drink:{
        type: Boolean,
        default:false
    },
    ingredients:{
        type: [String],
        default:[]
    },
    no_sales:{
        type:Number,
        default:false
    }
});

const MenuItem = mongoose.model('Menu', menuSchema, 'menuItems');
module.exports = MenuItem;