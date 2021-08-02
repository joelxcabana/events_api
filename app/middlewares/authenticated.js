const jwt = require('jsonwebtoken')


const ensureAuth = (req,res,next) =>{

    const authorization = req.headers['authorization']
    console.log(authorization)

    if(typeof authorization !== 'undefined'){
        const bearerToken = authorization.split(" ")[1]
        req.token = bearerToken

        const payload = jwt.verify(req.token, "events-api-secretkey",(err,data)=>{
            if(err){
                res.sendStatus(403)
            }
        });

        next()
    } else {
        res.sendStatus(403)
    }
}

module.exports = {
    ensureAuth
}