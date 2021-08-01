const express = require('express')
const router = express.Router()

const {getEvents,getEvent,addEvent } = require('../controllers/events')


router.get('/',getEvents)

router.get('/:id',getEvent)

router.post('/',addEvent)


module.exports = router