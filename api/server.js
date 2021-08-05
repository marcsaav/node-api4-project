require('dotenv').config()

const express = require('express')

const cors = require('cors')

const usersRouter = require('./Users/user-router')

const server = express()

server.use(cors())

server.use(express.json())

server.use(usersRouter)

server.get('/', (req, res) => {
    res.send(`<h1>Welcome to My User Server!</h1>`)
})

module.exports = server