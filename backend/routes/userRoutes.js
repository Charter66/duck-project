const userRouter = require('express').Router();
const {getOneUser, createUser} = require('../controllers/userController')

userRouter.route('/').post(createUser)
userRouter.route('/:id').get(getOneUser)


module.exports = userRouter;