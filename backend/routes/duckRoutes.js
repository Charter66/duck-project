const express = require('express')
const duckRouter = express.Router()
const {getAllDucks, getDuckById, updateDuck, deleteDuck, createDuck} = require('../controllers/duckController')
const {checkId , checkAddDuck, checkUpdateDuck} = require('../middleware/validateRequest')

duckRouter.route('/').get(getAllDucks)
duckRouter.route('/:id').all(checkId).put(checkUpdateDuck,updateDuck).get(getDuckById).delete(deleteDuck)
duckRouter.route('/create').post(checkAddDuck,createDuck)

module.exports = duckRouter;