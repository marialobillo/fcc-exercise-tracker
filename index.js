const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});





const listener = app.listen(process.env.PORT || port, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
