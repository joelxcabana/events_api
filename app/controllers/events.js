const EventsSchema = require('../models/events')

const getEvent = (req,res) => {


}

const getEvents = (req,res)=>{
    console.log('entroooooo')
    res.send({list:[1,2,3,4]})
}

const addEvent = async (req,res) =>{
    try {
        const {title, description, date_list ,location ,featured, img_url} = req.body
        const resEvent = await EventsSchema.create({
          title, description, date_list ,location ,featured, img_url
        })
 
        res.send({ data : resEvent })
        
    } catch (e) {
        httpError(res.e)
    }
}

module.exports = {
    getEvent,
    getEvents,
    addEvent
}