const yup = require('yup')

const login = async (req,res,next) =>{
    const body = req.body
 
    const loginSchema = yup.object({
        email : yup.string().email().required(),
        password : yup.string().required(),
    })

    try{
        await loginSchema.validate(body)
        next()
    }catch(error){
             return res.status(400).json({error})
    }
}

const user = async (req,res,next) => {
    const body = req.body
    
    const userSchema = yup.object({
        name: yup.string().min(4).required(),
        surname:yup.string().min(4).required(),
        email:yup.string().email().required(),
        password:yup.string().min(8).required(),
    })

    
    try{
        await userSchema.validate(body)
        next()
    }catch(error){
      return res.status(400).json({error})
    }
}

const event = async (req,res,next) =>{
    const body = req.body
   
    const eventSchema = yup.object({
        title: yup.string().min(8).required(),
        description: yup.string().min(50).required(),
        location: yup.string().min(4).required(),
        date_list : yup.array().of(
            yup.object().shape({
                date: yup.number().required(),
                price: yup.number().required(),
              })
        ),
        featured: yup.bool(),
        img_url: yup.string().matches(/(https?:\/\/.*\.(?:png|jpg))/,"format url not valid").required(),
    })

    try{
        await eventSchema.validate(body)
        next()
    }catch(error){
      return res.status(400).json({error})
    }
}

module.exports = {
    login,
    user,
    event
}
