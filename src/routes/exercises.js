const express = require('express')
const router = express.Router()

const {
   createExercise,
   getAllExercises,
   getExercisesByDate, 
} = require('../controllers/exercisesController')


router.route('/').post(createExercise)
router.route('/').get(getAllExercises)
router.route('/:date').get(getExercisesByDate)

module.exports = router