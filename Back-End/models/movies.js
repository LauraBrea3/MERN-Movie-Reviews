const mongoose = require('mongoose')
const movieSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    pic: { 
        type: String, 
        default: ''
    },
    rating: {
        type: String,
        default: 'Rating'
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})


module.exports = mongoose.model('Movie', movieSchema)