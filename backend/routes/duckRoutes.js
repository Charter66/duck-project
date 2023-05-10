const express = require('express')
const duckRouter = express.Router()
const {getAllDucks, getDuckById, updateDuck, deleteDuck, createDuck} = require('../controllers/duckController')
const {checkId , checkAddDuck, checkUpdateDuck} = require('../middleware/validateRequest')

duckRouter.route('/').get(getAllDucks)
duckRouter.route('/ducks/:id').all(checkId).put(checkUpdateDuck,updateDuck).delete(deleteDuck).get(getDuckById)
duckRouter.route('/create').post(checkAddDuck,createDuck)


module.exports = duckRouter;