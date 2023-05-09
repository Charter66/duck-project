const errorHandler = (err, req, res,next)=>{
    return res.status(err.statusCode || 500).json({error: err.message ?? err})
}

module.exports=errorHandler