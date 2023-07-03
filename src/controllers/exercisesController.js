const ExerciseModel = require('../models/Exercise');
const UserModel = require('../models/User');

const getAllExercises = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UserModel.findOne({ _id: id })
        const exercises = await ExerciseModel.find(
            { 
                username: user.username 
            })
            .select('duration date description')
            res.status(200).json({ exercises })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
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