const User = require('../models/userSchema')
const ErrorStatus = require('../utils/errorStatus')

const getOneUser = async(req,res,next) => {
    try {
        const {id} = req.params;
        const findUser = await User.findById(id);
        if(!findUser) throw new ErrorStatus('User not found');

        return res.json(findUser)
    } catch (error) {
        next(error)
    }
}
const createUser = async(req,res,next) => {
    try {
        const {firstName, lastName, email, password} = req.body;    
        if(!firstName || !lastName || !email || !password) throw new ErrorStatus('Missing fields', 400);

        const newUser = await User.create({firstName,lastName,email,password});

        res.status(201).json(newUser);
        
    } catch (error) {
        next(error)
    }
}

module.exports ={getOneUser, createUser}