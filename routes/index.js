const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));

router.post('/rides', controllers.createRides);

router.get('/rides', controllers.getAllRides);

router.get('/reviews', controllers.getAllReviews);

router.post('/reviews', controllers.createReviews);

router.get('/rides/details/:_id', controllers.getRideById);

router.get('/reviews/details/:_id', controllers.getReviewById);

router.delete('/rides/details/:_id', controllers.deleteRide);

router.delete('/reviews/details/:_id', controllers.deleteReview);

module.exports = router;
