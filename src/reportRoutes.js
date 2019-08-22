const express = require('express')
const router = express.Router()
const upload = require('./uploadMiddleware')
const Report = require('./reportSchema')

router.post('/', upload.array('files'), async (req, res) => {
  const report = new Report({
    latitude:  req.body.latitude,
    longitude: req.body.longitude,
    notes: req.body.notes,
    pictures: req.files.map(file => file.location)
  })
  const saved = await report.save()
  res.json(saved)
})

module.exports = router