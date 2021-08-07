require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {dbConnect} = require('./config/mongo')

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

//cargar las rutas
app.use('/api/v0/',require('./app/routes'));

dbConnect()
app.listen(PORT,()=>{
    console.log('\x1b[32m','***************************************************************************')
    console.log('\x1b[32m','----------> | API STARTED | <----------')
    console.log('\x1b[32m',`Port : ${PORT}`)
})