const User = require('../models/userSchema')
const ErrorStatus = require('../utils/errorStatus')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const getOneUser = async(req,res,next) => {
    try {
        const { email, password} = req.body;
        if(!email || !password) throw new ErrorStatus('Missing fields', 400);

        const findUser = await User.findOne({email}).select('+password');
        if(!findUser) throw new ErrorStatus('User not found', 404);

        const compare = bcrypt.compare( password, findUser.password);

        if(!compare) throw new ErrorStatus('Password does not match!', 4-1)
        const token = jwt.sign({_id: findUser._id}, process.env.JWT_SECRET)


        return res.cookie('token', token, {httpOnly: true}).sendStatus(200)
    } catch (error) {
        next(error)
    }
}
const createUser = async(req,res,next) => {
    try {
        const {firstName, lastName, email, password} = req.body;    
        if(!firstName || !lastName || !email || !password) throw new ErrorStatus('Missing fields', 400);

        const hash = await bcrypt.hash(password, 10)
        
        const { _id } = await User.create({
            firstName,
            lastName,
            email,
            password:hash,
        });

        const token = jwt.sign({_id}, process.env.JWT_SECRET)

        res.status(201).json(token);
        
    } catch (error) {
        next(error)
    }
}

module.exports = {getOneUser, createUser}