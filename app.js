require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {dbConnect} = require('./config/mongo')

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())



dbConnect()
app.listen(PORT,()=>{
    console.log('api stated in port',PORT)
})