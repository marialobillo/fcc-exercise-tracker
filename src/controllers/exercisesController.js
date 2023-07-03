const ExerciseModel = require('../models/Exercise');

const getAllExercises = (req, res) => {
    res.send('Get all exercises')
}

const createExercise = (req, res) => {
    res.send('Create exercise')
}

const getExercisesByDate = (req, res) => {
    res.send('Get exercises by date')
}

module.exports = {
    getAllExercises,
    createExercise,
    getExercisesByDate,
}