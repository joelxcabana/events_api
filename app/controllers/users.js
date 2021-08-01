const userModel = require('../models/users')
const { httpError } = require('../helpers/heandleError')
const moment = require('moment')


const addUser = async  (req,res)=>{
      console.log("addUser");
    try {
        const {name, surname,email,password} = req.body

        const status = 1
        const created = moment().unix()

        const resUser = await userModel.create({
            name, surname, email, password, status, created
        })

        res.send({ data : resUser })
        
    } catch (e) {
        httpError(res,e)
    }

}

module.exports  = {
    addUser
}