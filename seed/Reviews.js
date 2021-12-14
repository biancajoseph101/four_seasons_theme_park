const db = require('../db');
const Ride = require('../models/ride');
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    const terminaltor = await Ride.find({ name: 'The Terminaltor' })
    const dinoRollerCoaster = await Ride.find({ name: 'Dino Roller Coaster' })

  const reviews = [
    {
      name: 'Abidur',
      comments: 'I love this ride',
      ratings: 5,
      ride_id: terminaltor[0]._id
    },
    {
      name: 'Abidur',
      comments: 'I love this ride',
      ratings: 5,
      ride_id: dinoRollerCoaster[0]._id
    }
  ];

  await Review.insertMany(reviews);
  console.log('Created reviews!');
};

const run = async () => {
  await main();
  db.close();
};

run();
