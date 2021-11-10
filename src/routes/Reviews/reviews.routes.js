const { Routes } = require('express');
const { getReviews, postReviews } = require('./reviews.controllers');

const router = Router();

router.get('/reviews', postReviews)
router.post('/create', postReviews)

module.exports = router;