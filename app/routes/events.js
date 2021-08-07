const express = require('express')
const router = express.Router()
const auth = require('../middlewares/authenticated')
const {getEventById , getEvents , addEvent , getEventsFeatured , getAllEventsByUser } = require('../controllers/events')
const validate = require('../middlewares/validated')
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
    validate.event,
    addEvent
)

router.get(
    '/allByUser/',
    auth.ensureAuth,
    getAllEventsByUser
)

module.exports = router