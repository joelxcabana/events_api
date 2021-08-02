const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authenticated')
const {getEventById , getEvents , addEvent , getEventsFeatured , getAllEventsByUser } = require('../controllers/events')

//>>>>>>>>>>>>>>>>>>>>>>>>>>>> Public Endpoints <<<<<<<<<<<<<<<<<<<<<<<<<<<
//-------------------------------------------------------------------------
router.get(
    '/', 
    getEvents
)
//-------------------------------------------------------------------------
router.get(
    '/featured/',
     getEventsFeatured
)
//-------------------------------------------------------------------------
/*router.get(
    '/:id', 
    getEventById
)*/


//>>>>>>>>>>>>>>>>>>>>>>>>>>>> Users Endpoints <<<<<<<<<<<<<<<<<<<<<<<<<<<
//-------------------------------------------------------------------------
router.post(
    '/',
    auth.ensureAuth,
    addEvent
)

router.get(
    '/allByUser/',
    auth.ensureAuth,
    getAllEventsByUser
)

module.exports = router