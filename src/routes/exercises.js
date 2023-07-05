const express = require('express')
const router = express.Router()

const {
   createExercise,
   getExercisesLogs, 
} = require('../controllers/exercisesController')


router.route('/:id/exercises').post(createExercise)
router.route('/:id/logs').get(getExercisesLogs)

module.exports = router