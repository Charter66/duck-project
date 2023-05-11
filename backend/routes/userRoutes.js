const userRouter = require('express').Router();
const {getOneUser, createUser} = require('../controllers/userController')

userRouter.route('/').get(getOneUser).post(createUser)


module.exports = userRouter;