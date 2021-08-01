const enventModel = require('../models/events')
const {httpError} = require('../helpers/heandleError')
const getEvent = (req,res) => {


}

const getEvents = (req,res)=>{
    res.send({list:[1,2,3,4]})s
}

const addEvent = async (req,res) =>{
    try {
        const {title, description, date_list ,location ,featured, img_url} = req.body
        const resEvent = await enventModel.create({
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