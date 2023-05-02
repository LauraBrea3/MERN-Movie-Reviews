const router = require('express').Router()
const Movie = require('../models/movies')
const Review = require('../models/reviews')
//const db = require('../models/movies')
//const express = require('express')


router.get ('/', (req, res) => {
    Review.find ()
    .then (reviews => res.json (reviews))
    .catch (err => res.status (404).json ({ noreviewsfound: 'No Reviews Found'}));
})