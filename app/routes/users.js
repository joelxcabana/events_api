const express = require('express')
const router = express.Router()
const {addUser,login} = require('../controllers/users')
const validate = require('../middlewares/validated')

//>>>>>>>>>>>>>>>>>>>>>>>>>>>> Public Endpoints <<<<<<<<<<<<<<<<<<<<<<<<<<<
//-------------------------------------------------------------------------
router.post(
    '/',
    validate.user,
    addUser
)
//-------------------------------------------------------------------------
router.post(
    '/login',
    validate.login,
    login
)

module.exports = router