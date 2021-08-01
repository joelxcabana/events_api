const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const { Schema } = mongoose

const EventsSchema = new Schema({
    title:{
        type: String
    },
    description:{
        type: String
    },
    date_list:{
        type: [{
            date:{
                type: Number
            },
            price:{
                type: Number
            }
          }]
    },
    location:{
        type:String
    },
    featured:{
        type:Boolean
    },
    img_url:{
        type:String
    },
    created:{
        type:Number
    },
    status:{
        type:Number
    }

},{
    versionKey:false
})

EventsSchema.plugin(aggregatePaginate)

module.exports = mongoose.model('events',EventsSchema)