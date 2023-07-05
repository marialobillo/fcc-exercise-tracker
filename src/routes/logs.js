




const getExercisesByDate = async (req, res) => {
    try {
        const { id } = req.params;
        const { from, to } = req.query;
        const user = await UserModel.findOne({ _id: id })
        
        // const exercises = await ExerciseModel.find({
        //     username: user.username,
        //     date: {
        //         $gte: dates[0],
        //         $lte: dates[1],
        //     }
        // }).select('description duration date');
        // res.json({
        //     username: user.username,
        //     count: exercises.length,
        //     _id: user.id,
        //     log: exercises,
        // })
        res.json({ test: 'test' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}