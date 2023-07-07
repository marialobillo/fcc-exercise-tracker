const mongoose = require('mongoose')

const ExerciseSchema = new mongoose.Schema({
    user_id: {
        type: String,   
    },
    description: {
        type: String,
        required: [true, 'Please provide a description'],
    },
    duration: {
        type: Number,
        required: [true, 'Please provide a duration'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Exercise', ExerciseSchema)