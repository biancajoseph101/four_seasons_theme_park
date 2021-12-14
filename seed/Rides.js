const db = require('../db');
const Ride = require('../models/ride');
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

  const rides = [
    {
      name: 'The Terminaltor',
      url: 'https://i.pinimg.com/474x/a3/41/b6/a341b66a37d943391baab0c6527888ab--roller-coasters-trains.jpg',
      description:
        'Fly down the tracks and splash into the wave pools on this brand new family friendly water ride!',
      height_requirement: false,
      intensity: 2
    },
    {
      name: 'Dino Roller Coaster',
      url: 'https://www.coaster101.com/wp-content/uploads/2018/06/dinosaur-roller-coaster.jpg',
      description:
        'A dinosaur shaped roller coaster will bring you out the most fun adventure!',
      height_requirement: false,
      intensity: 2,
    },
    {
      name: 'Space Magic',
      url: 'https://blooloop.com/wp-content/uploads/2020/01/Tron-Lightcycle-Power-Run-Shanghai-Disneyland-best-themed-roller-coasters.jpg',
      description:
        'Motorbike roller coaster which will lead you to the moon!',
      height_requirement: true,
      intensity: 4,
    },
    {
      name: 'For Loop',
      url: 'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3JvbGxlci1jb2FzdGVyLXVwZGF0ZTguanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9fX0=',
      description:
        'The Four Loop rollercoaster is the biggest rollercoaster in the world, known for it`/s four vertical loops. Buckle up',
      height_requirement: true,
      intensity: 3,
    },
    {
      name: 'Skyhigh',
      url: 'https://www.intamin.com/wp-content/uploads/2019/11/skyrush_05-1170x658.jpg',
      description:
        'The Skyhigh is the tallest and second fastest roller coaster and one of top thrill Dragsters',
      height_requirement: true,
      intensity: 5,
    },
    {
      name: 'Water Jet',
      url: 'https://i.pinimg.com/originals/b2/1c/f5/b21cf5d064bbdf939b9e72d27d2a652e.jpg',
      description:
        'Let`/s talk about a thrill! Within two minutes, your ride ends with a dive through an underwater tunnel',
      height_requirement: false,
      intensity: 4,
    },
    {
      name: 'Bangle Bing',
      url: 'https://www.intamin.com/wp-content/uploads/2019/06/IMG_20190618_111914_BURST026-1920x1440.jpg',
      description:
        'Leading into a Zero-g wind, top speed of 106.1 km per hour (65.9 mph) up to a 52 m (171 ft) top hat, before pulling down to the right into a Zero-g stall',
      height_requirement: true,
      intensity: 5,
    },
    {
      name: 'mystic',
      url: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Mystic_1.jpg',
      description:
        'A total 1,886.5 feet of track both forwards and backwards, at a top speed of 52.8 mph, enjoy your new jorney!',
      height_requirement: true,
      intensity: 3,
    },
    {
      name: 'Mad Dragon',
      url: 'https://onethemeparkatatime.com/wp-content/uploads/2018/05/CZ06.jpg',
      description:
        'A total of 20 riders per train, the massive spike and non-inverting loop really take the triple launch gimmick!',
      height_requirement: false,
      intensity: 2,
    },
    {
      name: 'Manta',
      url: 'https://live.staticflickr.com/5231/5912665313_5ae1e75974_b.jpg',
      description:
        'A 3,359-foot-long (1,024 m) roller coaster with water splash!',
      height_requirement: true,
      intensity: 3,
    },
    {
      name: 'Cannibal',
      url: 'https://coasterpedia.net/w/images/thumb/7/77/Cannibal_%28Lagoon%29_2016_01.jpg/1000px-Cannibal_%28Lagoon%29_2016_01.jpg',
      description:
        'Featuring a drop at an angle of 116° with a height of 208 feet, Cannibal is the tallest roller coaster with a beyond-vertical drop!! Washroom before riding!',
      height_requirement: true,
      intensity: 5,
    },
    {
      name: 'Toy Story',
      url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2018%2F07%2Ftoy-story-land-slinky-dog-dash-TSLCOASTER0718.jpg&q=85',
      description:
        'Join our new fairy tale trip!Enough cutesiness to keep kids excited!',
      height_requirement: false,
      intensity: 1,
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
