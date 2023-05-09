const express = require('express')
const router = express.Router()
const {getAllDucks, getDuckById, updateDuck, deleteDuck, createDuck} = require('../controllers/duckController')
const {checkId , checkAddDuck, checkUpdateDuck} = require('../middleware/validateRequest')

router.route('/ducks').get(getAllDucks)
router.route('/duck/:id').all(checkId).put(checkUpdateDuck,updateDuck).delete(deleteDuck).get(getDuckById)
router.route('/create').post(checkAddDuck,createDuck)


module.exports = router;