const router = require('express').Router()
// const Movie = require('../models/movies')
// const Review = require('../models/reviews')
const db = require('../models')


router.get ('/:id/reviews', (req, res) => {
    db.Review.find({movie:req.params.id})
    .populate('movie')
    .then (reviews => res.json (reviews))
    .catch (err => res.status (404).json ({ Message: 'No Reviews found for this movie'}));
    
})


router.post('/:id/reviews', (req,res) => {
    console.log(req.body)
    db.Movie.findById(req.params.id)
    .then (movie => res.json ({ msg: 'Review added successfully'}))
    .then(movie => {
        db.Review.create(req.body)
    })
    .catch(err => {
        res.render('error404')
        console.log("this is a 404 error")
    })
})


module.exports = router