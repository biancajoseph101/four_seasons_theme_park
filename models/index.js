const mongoose = require('mongoose')
const RideSchema = require('./ride')
const ReviewSchema = require('./review')

const Ride = mongoose.model('rides', RideSchema)
const Review = mongoose.model('reviews', ReviewSchema)

module.exports = {
  Ride,
  Review
}