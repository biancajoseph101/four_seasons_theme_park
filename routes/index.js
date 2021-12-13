const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.post('/rides', controllers.createRides)

router.get('/rides', controllers.getAllRides)

router.get('/reviews', controllers.getAllReviews)

module.exports = router;