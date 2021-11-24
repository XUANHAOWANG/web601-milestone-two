const mongoose = require('mongoose')
const cart = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    countInStock: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Cart', cart )