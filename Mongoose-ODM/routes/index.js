const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.send('Hello Welcome')
})

route.get('/hi', (req, res) => {
    res.send('Hi Welcome Back!')
})

module.exports = route