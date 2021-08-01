const mongoose = require('mongoose')
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const { Schema } = mongoose

const EventsSchema = new Schema({
    title:{
        type: String,
        require:true
    },
    description:{
        type: String,
        require:true
    },
    date_list:{
        type: [{
            date:{
                type: Number,
                require:true
            },
            price:{
                type: Number,
                require:true
            }
          }]
    },
    location:{
        type:String,
        require:true
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