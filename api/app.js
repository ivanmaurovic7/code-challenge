const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, authorization')
    next()
})

require('dotenv').config()


const authorization = require('./middleware/authorization')

const login = require('./login')
const encoder = require('./encoder')

app.use(bodyParser.json())

app.post('/login', login)
app.post('/encode', authorization, encoder)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app