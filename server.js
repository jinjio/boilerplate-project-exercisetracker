const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config()

app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const userId = process.env.USER_ID

// app.get('/api/users', (req, res) => {
//   console.log(req)
// })

app.post('/api/users', (req, res) => {
  console.log()
  res.json({username: req.body.username , _id: userId})
})

app.get('/api/users', (req, res) => {
  res.json([])
})

app.post('/api/users/:_id/exercises', (req, res) => {
  console.log(req)
  res.json({ test: "hi"})
})


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
