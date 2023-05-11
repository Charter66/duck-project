const mongoose = require('../db');
const urlPattern = new RegExp(`^(http(s)?://)?([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?$`);

const dogsSchema = new mongoose.Schema({
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

const Dog = mongoose.model('Dog', dogsSchema);
module.exports = Dog;