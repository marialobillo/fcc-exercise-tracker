const mongoose = require('mongoose')
require('dotenv').config()

const connectionString = process.env.MONGO_URI

const connectDB = async () => {
    try {
        return await mongoose.connect(connectionString, {})
    } catch (error) {
        console.log('Error during connection to MongoDB: ', error)
    }
}

module.exports = connectDB
