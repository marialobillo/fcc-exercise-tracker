const mongoose = require('mongoose')
require('dotenv').config()

const connectionString = process.env.MONGO_URI

const connectDB = async () => {
    return await mongoose
        .connect(connectionString)
        .then( () => console.log('/ *** MongoDB connected *** /'))
        .catch( err => console.log(err))
}

module.exports = connectDB
