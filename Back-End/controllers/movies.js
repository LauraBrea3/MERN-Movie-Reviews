const router = require('express').Router()
const db = require('../models/movies')

router.get('/', (req,res) => {
    res.send('GET /movies')
})


module.exports = router