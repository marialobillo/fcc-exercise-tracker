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

const createExercise = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await UserModel.findOne({ _id: userId })
        const { duration, description, date } = req.body;
        const exercise = await ExerciseModel.create({
            username: user.username,
            description,
            duration,
            date,
        })
        res.status(201).json({ exercise })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}

const getExercisesByDate = (req, res) => {
    res.send('Get exercises by date')
}

module.exports = {
    getAllExercises,
    createExercise,
    getExercisesByDate,
}