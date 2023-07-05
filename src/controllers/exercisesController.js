const ExerciseModel = require('../models/Exercise');
const UserModel = require('../models/User');


const createExercise = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await UserModel.findOne({ _id: userId })       
        let { duration, description, date } = req.body;
        if(!date){
            date = new Date().toISOString().substring(0, 10)
        }
        const exercise = await ExerciseModel.create({
            username: user.username,
            description,
            duration,
            date,
        })
        res.status(201).json({ 
            username: user.username,
            description,
            duration,
            date,
         })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}


const getExercisesLogs = async (req, res) => {
    try {
        const { id } = req.params;
        const { from, to, limit } = req.query;
        const user = await UserModel.findOne({ _id: id })
        const logs = await ExerciseModel
            .find({
            username: user.username,
            date: {
                $gte: from,
                $lte: to,
            }
        })
            .select('description duration date -_id')
            .limit(limit)
        res.status(200).json({
            username: user.username,
            count: logs.length,
            _id: user.id,
            log: logs,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}



module.exports = {
    createExercise,
    getExercisesLogs,
}