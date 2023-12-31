const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const connectDB = require('./src/db/connection')
require('dotenv').config()

const usersRouter = require('./src/routes/users')
const exercisesRouter = require('./src/routes/exercises')

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/users', usersRouter)
app.use('/api/users/', exercisesRouter)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const start = async () => {
  try {
      await connectDB(process.env.MONGO_URI)
      app.listen(process.env.PORT || port, () => {
        console.log('Your app is listening on port ' + port)
      })
  } catch (error) {
    console.log(error)
  }
}

start()
