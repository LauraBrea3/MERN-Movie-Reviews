const router = require('express').Router()
const db = require('../models')


router.get ('/', (req, res) => {
    db.Movie.find ()
    .then (movies => res.json (movies))
    .catch (err => res.status (404).json ({ nomoviesfound: 'No Movies Found'}));
})

router.get ('/:id', (req, res) => {
    db.Movie.findById (req.params.id)
    .then (movie => res.json (movie))
    .catch (err => res.status (404).json ({ nomoviefound: 'No Movie Found'}));
});


router.post('/', (req,res) => {
    db.Movie.create(req.body)
    .then (movie => res.json ({ msg: 'Movie added successfully'}))
   ;
})

// router.get('/:id', (req,res) => {
//     db.Movie.findById(req.params.id)
//     .populate('review')
//     .then(movie => {
//         console.log(movie.review)
//         res.render('/movies', { movie })
//     })
//     .catch(err => {
//         console.log('err', err)
//         res.render('error404')
//     })
// })

// router.post('/:id/reviews', (req,res) => {
//     console.log(req.body)
//     db.Movie.findById(req.params.id)
//     .then(movie => {
//         db.Review.create(req.body)
//         .then(reviews => {
//             movie.review.push(reviews.id)
//             movie.save()
//             .then(() => {
//                 res.redirect(`/movies/${req.params.id}`)
//             })
//         })
//         .catch(err => {
//             res.render('error404')
//         })
//     })
//     .catch(err => {
//         res.render('error404')
//     })
// })

router.put('/:id', (req,res) => {
   db.Movie.findByIdAndUpdate (req.params.id, req.body)
    .then (movie => res.json ({ msg: 'Updated successfully'}))
    .catch (err => res.status (400).json ({ error: 'Unable to update the Database'}));
})



router.delete('/:id', (req,res) => {
    Movie.findByIdAndRemove (req.params.id, req.body)
    .then (movie => res.json ({ mgs: 'Movie entry deleted successfully'}))
    .catch (err => res.status (404).json ({ error: 'Unable to delete movies'}));
});

module.exports = router