const db = require('../db');
const Ride = require('../models/ride');
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    const terminaltor = await Ride.find({ name: 'The Terminaltor' })
    const dinoRollerCoaster = await Ride.find({ name: 'Dino Roller Coaster' })
    const spaceMagic = await Ride.find({ name: 'Space Magic' })
    const forLoop = await Ride.find({ name: 'For Loop' })
    const skyHigh = await Ride.find({ name: 'Skyhigh' })
    const waterJet = await Ride.find({ name: 'Water Jet' })
    const bangleBing = await Ride.find({ name: 'Bangle Bing' })
    const mystic = await Ride.find({ name: 'mystic' })
    const madDragon = await Ride.find({ name: 'Mad Dragon' })
    const manta = await Ride.find({ name: 'Manta' })
    const cannibal = await Ride.find({ name: 'Cannibal' })
    const toyStory = await Ride.find({ name: 'Toy Story' })

  const reviews = [
    {
      name: 'Abidur',
      comments: 'I love this ride',
      ratings: 5,
      ride_id: terminaltor[0]._id
    },
    {
      name: 'Grant',
      comments: 'This was amazing',
      ratings: 5,
      ride_id: terminaltor[0]._id
    },
    {
      name: 'Gihae',
      comments: 'Just a beautiful classic',
      ratings: 4,
      ride_id: dinoRollerCoaster[0]._id
    },
    {
      name: 'Bianca',
      comments: 'Loved it totally',
      ratings: 5,
      ride_id: dinoRollerCoaster[0]._id
    },
    {
      name: 'Andy',
      comments: 'Did not like it at all',
      ratings: 1,
      ride_id: spaceMagic[0]._id
    },
    {
      name: 'Michael',
      comments: 'Wish I had spent my money somewhere else',
      ratings: 1,
      ride_id: spaceMagic[0]._id
    },
    {
      name: 'John',
      comments: 'Wow!!!',
      ratings: 5,
      ride_id: forLoop[0]._id
    },
    {
      name: 'Jimmy',
      comments: 'Best experience',
      ratings: 5,
      ride_id: forLoop[0]._id
    },
    {
      name: 'James',
      comments: 'It was average',
      ratings: 3,
      ride_id: skyHigh[0]._id
    },
    {
      name: 'Dwayne',
      comments: 'Did not like it so much',
      ratings: 2,
      ride_id: skyHigh[0]._id
    },
    {
      name: 'Chris',
      comments: 'Best experience!!!',
      ratings: 5,
      ride_id: waterJet[0]._id
    },
    {
      name: 'Lily',
      comments: 'One of the best rides of my life',
      ratings: 4,
      ride_id: waterJet[0]._id
    },
    {
      name: 'Julia',
      comments: 'Best experience with my boyfriend',
      ratings: 5,
      ride_id: bangleBing[0]._id
    },
    {
      name: 'Justin',
      comments: 'This was nice',
      ratings: 4,
      ride_id: bangleBing[0]._id
    },
    {
      name: 'Armando',
      comments: 'Will never suggest it to anyone',
      ratings: 1,
      ride_id: mystic[0]._id
    },
    {
      name: 'Ben',
      comments: 'I could just watch movies instead of coming here',
      ratings: 1,
      ride_id: mystic[0]._id
    },
    {
      name: 'Billy',
      comments: 'This felt dangerous',
      ratings: 4,
      ride_id: madDragon[0]._id
    },
    {
      name: 'Cristen',
      comments: 'This was so scary!!!',
      ratings: 3,
      ride_id: madDragon[0]._id
    },
    {
      name: 'Alondra',
      comments: 'Should have tried something else',
      ratings: 1,
      ride_id: manta[0]._id
    },
    {
      name: 'Randy',
      comments: 'Did not like it at all',
      ratings: 1,
      ride_id: manta[0]._id
    },
    {
      name: 'Bobby',
      comments: 'Wow! Amazing!',
      ratings: 5,
      ride_id: cannibal[0]._id
    },
    {
      name: 'Tom',
      comments: 'It was sort of okayish',
      ratings: 3,
      ride_id: cannibal[0]._id
    },
    {
      name: 'Matt',
      comments: 'Loved it completely',
      ratings: 5,
      ride_id: toyStory[0]._id
    },
    {
      name: 'Hardy',
      comments: 'Cool!!!',
      ratings: 5,
      ride_id: toyStory[0]._id
    },
  ];

  await Review.insertMany(reviews);
  console.log('Created reviews!');
};

const run = async () => {
  await main();
  db.close();
};

run();




