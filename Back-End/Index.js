const express = require('express')
//const methodOverride = require('method-override')
const mongoose = require('mongoose')
require ('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Brazil!')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})


const PORT = process.env.PORT

app.listen(PORT, console.log(`listening on port ${PORT}`))