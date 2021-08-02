const express = require('express')
const router = express.Router()
const {addUser,login} = require('../controllers/users')

//>>>>>>>>>>>>>>>>>>>>>>>>>>>> Public Endpoints <<<<<<<<<<<<<<<<<<<<<<<<<<<
//-------------------------------------------------------------------------
router.post(
    '/',
    addUser
)
//-------------------------------------------------------------------------
router.post(
    '/login',
    login
)

module.exports = router