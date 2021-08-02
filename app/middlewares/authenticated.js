const jwt = require('jsonwebtoken')


const ensureAuth = (req,res,next) =>{

    if (!req.headers.authorization) {
        res.sendStatus(403)
    }

    //se espera formato -> Bearer XXXX , interesa el token en pos(1) del array
    const token = req.headers.authorization.split(' ')[1]
    if (token === null) {
        res.sendStatus(403)
    }

    const payload = jwt.verify(token, "events-api-secretkey")
    
    next()
}

module.exports = {
    ensureAuth
}