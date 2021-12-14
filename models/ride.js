const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Ride = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    description: {type: String, required: true},
    height_requirement: {type: Boolean, required: true},
    intensity: {type: Number, required: true}
  },
  { timestamps: true }
)

module.exports = mongoose.model('rides', Ride)