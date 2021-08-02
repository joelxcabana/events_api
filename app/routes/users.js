const express = require('express')
const router = express.Router()

const {addUser,login} = require('../controllers/users')

router.post('/', addUser)

router.post('/login',login)

module.exports = router