const express = require('express')
const dogRouter = express.Router()
const {createDogs} = require('../controllers/dogsController')

dogRouter.route('/create').post(createDogs)


module.exports = dogRouter;