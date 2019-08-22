const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  latitude:  String,
  longitude: String,
  notes:   String,
  pictures: [String],
  date: { type: Date, default: Date.now }
});

const Report = mongoose.model('Report', reportSchema)

module.exports = Report

