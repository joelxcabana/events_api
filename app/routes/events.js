const express = require('express')
const router = express.Router()

const {getEventById , getEvents , addEvent , getEventsFeatured } = require('../controllers/events')

router.get('/', getEvents)

router.get('/featured/', getEventsFeatured)

router.get('/:id', getEventById)

router.post('/', addEvent)

module.exports = router