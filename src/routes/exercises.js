const express = require('express')
const router = express.Router()

const {
   createExercise,
   getAllExercises,
   getExercisesByDate, 
} = require('../controllers/exercisesController')


router.route('/:id/exercises').post(createExercise)
router.route('/:id/exercises').get(getAllExercises)
router.route('/:id/exercises/:date').get(getExercisesByDate)

module.exports = router