const enventModel = require('../models/events')
const { httpError } = require('../helpers/heandleError')
const moment = require('moment')

const getEventById = async (req,res) => {
    try {
        const { id } = req.params
        const eventResult = await enventModel.findById(id);
        
        res.send(eventResult)
    } catch (e) {
        httpError(res,e)
    }
}

const getEvents = async (req,res) => {
    const { page = 1, limit = 10 } = req.query

    const options = {
        page,
        limit
    }

   try {
       const today = moment().unix()
       //obtiene los eventos con fechas posteriores al dia de hoy y que esten activas (status:1)
       const aggregate = enventModel.aggregate([     
        {
          $match: {date_list : { $elemMatch: { date: {$gt:today}}} },
        },
        {$sort: {'date_list.date': 1}}
       ]);

       enventModel.aggregatePaginate(aggregate,options).then(function(results){
            res.send(results)
        }).catch(function(err){
            console.log(err);
        })

   } catch (e) {
     httpError(res,e)
   }
}

const addEvent = async (req,res) => {
    try {
        const {title, description, date_list ,location ,featured, img_url} = req.body
        const status = 1
        const created = moment().unix()

        const resEvent = await enventModel.create({
          title, description, date_list ,location ,featured, img_url, created, status
        })

        res.send({ data : resEvent })
        
    } catch (e) {
        httpError(res,e)
    }
}

const getEventsFeatured = async (req,res) =>{
    try {
        const criteria = {
            featured:true
        }

        const eventsFeatured = await enventModel.find(criteria);   

        res.send(eventsFeatured)
    } catch (e) {
      httpError(res,e)
    }
}

module.exports = {
    getEventById,
    getEvents,
    addEvent,
    getEventsFeatured
}