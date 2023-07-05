const express = require('express')
const router = express.Router()

const {
   createExercise,
   getExercisesLogs, 
} = require('../controllers/exercisesController')


router.route('/:_id/exercises').post(createExercise)
router.route('/:_id/logs').get(getExercisesLogs)

module.exports = router