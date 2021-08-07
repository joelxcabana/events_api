const enventModel = require('../models/events')
const { httpError } = require('../helpers/heandleError')
const moment = require('moment')


/**
 * Obtiene un evento por el _id
 * @param {*} req 
 * @param {*} res 
 */
const getEventById = async (req,res) => {
    try {
        const { id } = req.params
        const eventResult = await enventModel.findById(id);
        
        res.send(eventResult)
    } catch (e) {
        httpError(res,e)
    }
}
/**
 * Obtiene todos los eventos activos en forma de paginado
 * @param {*} req 
 * @param {*} res 
 */
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

/**
 * Agregar un nuevo evento
 * @param {*} req 
 * @param {*} res 
 */
const addEvent = async (req,res) => {
    try {
        const {title, description, date_list ,location ,featured, img_url} = req.body
        const status = 1
        const created = moment().unix()
        const user_id = req.session._id
        const resEvent = await enventModel.create({
          title, description, date_list ,location ,featured, img_url, created, status,user_id
        })

        res.send({ data : resEvent })
        
    } catch (e) {
        httpError(res,e)
    }
}

/**
 * Obtiene los eventos destacados en forma de paginado
 * @param {*} req 
 * @param {*} res 
 */
const getEventsFeatured = async (req,res) =>{
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
          $match: {date_list : { $elemMatch: { date: {$gt:today}}},featured:true},
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

const getAllEventsByUser = async (req,res) =>{
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
          $match: {date_list : { $elemMatch: { date: {$gt:today}}},user_id:req.session_id},
        },
        {$sort: {'date_list.date': 1}}
       ]);

       enventModel.aggregatePaginate(aggregate,options).then(function(results){
            res.status(200).send(results)
        }).catch(function(err){
            console.log(err);
        })

   } catch (e) {
     httpError(res,e)
   }
}

module.exports = {
    getEventById,
    getEvents,
    addEvent,
    getEventsFeatured,
    getAllEventsByUser
}