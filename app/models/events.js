const mongoose = require('mongoose')
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
    }

},{
    versionKey:false
})

module.exports = mongoose.model('events',EventsSchema)