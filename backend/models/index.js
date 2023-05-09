const mongoose = require('../db');
const urlPattern = new RegExp(`^(http(s)?://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?$`);

const duckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 25,
    },
    owner: {
        type: String,
        required: true,
        maxlength: 50,
        
    },
    quote:{
        type: String,
        required: true,
        maxlength: 50,
    },
    imageUrl: {
        type: String,
        validate: {
            validator: function (value) {
                return urlPattern.test(value)
            },
            message: 'Invalid URL',
        }

    }
})

const Duck = mongoose.model('Duck', duckSchema);
module.exports = Duck;