const ExerciseModel = require('../models/Exercise');
const UserModel = require('../models/User');


const createExercise = async (req, res) => {
    try {
        const id = req.params._id;
        let { duration, description, date } = req.body;
        const user = await UserModel.findOne({ _id: id })
        if(!user) {
            res.send('The user does not exist')
        }
        const exercise = await ExerciseModel.create({
            username: user.username,
            description,
            duration,
            date: date ? new Date(date) : new Date(),
            userId: id,
        })
        res.status(201).json({ 
            username: user.username,
            description,
            duration: Number(duration),
            date : new Date(exercise.date).toDateString(),
            _id: id,
        })
    } catch (error) {
        res.status(500).json({ error })
    }
}


const getExercisesLogs = async (req, res) => {
    try {
        const id = req.params._id;
        const { from, to, limit } = req.query;
        const user = await UserModel.findOne({ _id: id })
        if(!user) {
            return res.send('The user does not exist')
        }
        const filter = {
            userId: id,
        }
        let dateFilter = {}
        if(from && to) {
            dateFilter = {
                $gte: new Date(from),
                $lte: new Date(to),
            }
            filter.date = dateFilter
        } 
        const exercises = await ExerciseModel.find(filter).limit(+limit ?? 200)
        const log = exercises.map(exercise => ({
            description: exercise.description,
            duration: exercise.duration,
            date: exercise.date.toDateString(),
        }))
        res.status(200).json({
            username: user.username,
            count: log.length,
            _id: user.id,
            log,
        })
    } catch (error) {
        res.status(500).json({ error })
    }
}



module.exports = {
    createExercise,
    getExercisesLogs,
}