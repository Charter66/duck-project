const mongoose = require('../db');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxlength: 25,
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 50,
        
    },
    email:{
        type: String,
        required: true,
        unique: true,
        maxlength: 50,
        match: [/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, 'Not a valid email']
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength:20,
        select:  false,
    },
})

const User = mongoose.model('User', userSchema);
module.exports = User;