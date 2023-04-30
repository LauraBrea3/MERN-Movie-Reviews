const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    movie:{
        type: String,
        required: true
    },
    yourName: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    review: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Review', reviewSchema)