const userModel = require('../models/users')
const { httpError } = require('../helpers/heandleError')
const moment = require('moment')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const addUser = async  (req,res)=>{
      console.log("addUser");
    try {
        let {name, surname,email,password} = req.body

        const status = 1
        const created = moment().unix()
        password = bcrypt.hashSync(password,bcrypt.genSaltSync(10))

        const resUser = await userModel.create({
            name, surname, email, password, status, created
        })

        res.send({ data : resUser })
        
    } catch (e) {
        httpError(res,e)
    }

}

const login = async (req,res)=>{

    const { email, password} = req.body

    const criteria = {
         email,
         status: 1
     }
    
     userModel.findOne(criteria, function(err, user) {
        if (err) {
            res.json({ status: 0, message: 'error'})
        }

        if (!user) {
            res.json({ status: 0, message: "not found"})
        }

        if(bcrypt.compareSync(password,user.password)){

            const payload = {
                _id: user._id,
                name: user.name,
                surname: user.surname,
                email: user.email,
            }
            
            jwt.sign(payload, "events-api-secretkey",{expiresIn:'32s'},(err,token)=>{
                res.send({token})
            });

        }else{
            res.json({ status: 0, message: "not found"})
        }
    })

    


}

module.exports  = {
    addUser,
    login
}