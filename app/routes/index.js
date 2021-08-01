const express = require('express')
const router = express.Router()
const fs = require('fs');

//obtiene la ruta de este directorio
const pathRouter = `${__dirname}`

/**
 * @param {*} filenName nombre del archivo con extension
 * @returns retorna el nombre del archivo sin la extension
 */
const removeExtension = (filenName) =>{
       return filenName.split('.').shift()
}

//carga las rutas dinamicamente y el controlador necesario
fs.readdirSync(pathRouter).filter((file =>{
    console.log(pathRouter);
    const fileWithOutExt = removeExtension(file)
    //busca si hay algun archivo con el nombre index
    const skip = ['index'].includes(fileWithOutExt)

    if(!skip){
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`))
        console.log('---->',fileWithOutExt)
    }
  
}))

router.get('*', (req,res) =>{
    res.status(404).send({error: 'Not Found'})
})

module.exports = router