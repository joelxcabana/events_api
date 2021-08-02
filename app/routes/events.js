const express = require('express')
const router = express.Router()
const {ensureAuth} = require('../middlewares/authenticated')

const {getEventById , getEvents , addEvent , getEventsFeatured } = require('../controllers/events')

router.get('/', getEvents)

router.get('/featured/', getEventsFeatured)

router.get('/:id', getEventById)

router.post('/',ensureAuth, addEvent)

module.exports = router