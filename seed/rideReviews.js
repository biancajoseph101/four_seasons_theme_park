const db = require('../db');
const Ride = require('../models/ride');
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
  const review1 = await new Review({
    name: 'Reviewer 1',
    comments: 'This ride was great',
    ratings: 3
  });
  review1.save();

  const review2 = await new Review({
    name: 'Reviewer 2',
    comments: 'This was not good',
    ratings: 1
  });
  review2.save();

  const rides = [
    {
      name: 'The Terminaltor',
      url: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcoasterforce.com%2Fdev%2Fwp-conte[…]F2016%2F11%2FSkatteoenDjursSommerland3.jpg&f=1&nofb=1',
      description:
        'Fly down the tracks and splash into the wave pools on this brand new family friendly water ride!',
      height_requirement: false,
      intensity: 2,
      reviews: review1._id
    },
    {
      name: 'Dino Roller Coaster',
      url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.coaster101.com%2Fwp-content%[…]%2F2018%2F06%2Fdinosaur-roller-coaster.jpg&f=1&nofb=1',
      description:
        'A dinosaur shaped roller coaster will bring you out the most fun adventure!',
      height_requirement: false,
      intensity: 2,
      reviews: review1._id
    }
  ];

  await Ride.insertMany(rides);
  console.log('Created rides!');
};

const run = async () => {
  await main();
  db.close();
};

run();
