require('dotenv').config()
const express = require('express')
const cors = require('cors')
const {dbConnect} = require('./config/mongo')
const swaggerUi = require('swagger-ui-express')
swaggerDocument = require('./swagger.json')

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

//cargar las rutas
app.use('/api/v0/',require('./app/routes'));

//configuracion para swagger
app.use('/',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

dbConnect()
app.listen(PORT,()=>{
    console.log('\x1b[32m','***************************************************************************')
    console.log('\x1b[32m','----------> | API STARTED | <----------')
    console.log('\x1b[32m',`Port : ${PORT}`)
})
