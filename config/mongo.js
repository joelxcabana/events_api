const mongoose = require('mongoose')

const dbConnect = () => {
     const DB_URI = process.env.DB_URI
     mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology:true
     },
     (err,res) =>{
         if(!err){
             console.log('\x1b[32m','----------> | Mongo db is connected | <----------')
         }else {
            console.log('\x1b[31m','----------> |Mongo db failed | <---------')
         }
     })
}

module.exports = { dbConnect }