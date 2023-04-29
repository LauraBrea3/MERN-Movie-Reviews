const express = require('express');
const router = express.Router();
const Movie = require('../models/movies')

router.get('/', (req,res) => {
    res.send('GET /movies')
})

router.get ('/', (req, res) => {
    Movies.find ()
    .then (movies => res.json (movies))
    .catch (err => res.status (404).json ({ nomoviesfound: 'No Movies Found'}));
})

router.get ('/:id', (req, res) => {
    Movie.findById (req.params.id)
    .then (movie => res.json (movie))
    .catch (err => res.status (404).json ({ nomoviefound: 'No Movie Found'}));
});

router.post('/', (req,res) => {
    Movie.findByIdAndUpdate (req.params.id, req.body)
    .then (movie => res.json ({ msg: 'Updated successfully'}))
    .catch (err => res.status (400).json ({ error: 'Unable to update the Database'}));
});

router.put('/', (req,res) => {
    res.send('PUT /movies')
})

router.delete('/:id', (req,res) => {
    Movie.findByIdAndRemove (req.params.id, req.body)
    .then (movie => res.json ({ mgs: 'Movie entry deleted successfully'}))
    .catch (err => res.status (404).json ({ error: 'Unable to delete movies'}));
});

module.exports = router