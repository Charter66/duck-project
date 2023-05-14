const userRouter = require('express').Router();
const {getOneUser, createUser} = require('../controllers/userController')

userRouter.route('/login').post(getOneUser)
userRouter.route('/register').post(createUser)


module.exports = userRouter;