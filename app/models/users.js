const mongoose = require('mongoose')

const { Schema } = mongoose

const UsersSchema = new Schema({
    name:{
        type: String,
        require:true
    },
    surname:{
        type: String,
        require:true
        
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
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

module.exports = mongoose.model('users',UsersSchema)