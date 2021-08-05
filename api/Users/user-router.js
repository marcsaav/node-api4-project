const express = require('express')

const router = express.Router()

const Users = require('./user-model')

const checkReqBody = require('../Middlewares/auth')

router.get('/api/users', (req, res) => {
    const users = Users.getUsers()
    if(users) {
        res.status(200).json(users)
    } else {
        res.status(500).json({ message: "Couldn't fetch users."})
    }
})

router.post('/api/register', checkReqBody, (req, res) => {
    const user = Users.createUser(req.body)
    if(user) {
        res.status(200).json(user)
    } else {
        res.status(500).json({ message: 'Could not create new user.'})
    }
})

router.post('/api/login', checkReqBody, (req, res) => {
    res.status(200).send(`<h2>Hey there ${req.body.username}!</h2>`)
})

module.exports = router