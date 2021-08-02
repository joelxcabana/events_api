const jwt = require('jsonwebtoken')


const ensureAuth = (req,res,next) =>{

    const authorization = req.headers['authorization']

    if(typeof authorization !== 'undefined'){
        const bearerToken = authorization.split(" ")[1]
        req.token = bearerToken

        jwt.verify(req.token, "events-api-secretkey",(err,payload)=>{
            if(err){
                res.sendStatus(403)
            }
            
            req.session = payload
            console.log(req.session)
        });

   

        next()
    } else {
        res.sendStatus(403)
    }
}

module.exports = {
    ensureAuth
}