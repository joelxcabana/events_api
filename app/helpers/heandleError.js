const httpError  = (res,err) =>{
    console.log(err);
    res.status(500)
    res.data({error:'Algo ocurrio'})
}

module.exports = { httpError }