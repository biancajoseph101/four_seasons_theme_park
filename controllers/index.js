const Ride = require('../models/ride');
const Review = require('../models/review');
const { process_params } = require('express/lib/router');

const createRides = async (req, res) => {
  try {
    const ride = await new Ride(req.body);
    await ride.save();
    return res.status(201).json({
      ride
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllRides = async (req, res) => {
  try {
    const rides = await Ride.find();
    return res.status(200).json({ rides });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    return res.status(200).json({ reviews });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createReviews = async (req, res) => {
  try {
    const review = await new Review(req.body);
    await review.save();
    return res.status(201).json({
      review
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getRideById = async (req, res) => {
  try {
    const { _id } = req.params;
    const ride = await Ride.findById(_id);
    if (ride) {
      return res.status(200).json({ ride });
    }
    return res.status(404).send(`Ride with the specified ID does not exists`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createRides,
  getAllRides,
  getAllReviews,
  createReviews,
  getRideById
};
