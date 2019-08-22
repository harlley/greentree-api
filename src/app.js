const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const reportRoutes = require('./reportRoutes')

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

app.use('/reports', reportRoutes)

app.get('/', (req, res) => {
  res.json({ status: 'ok'})
})


module.exports = app