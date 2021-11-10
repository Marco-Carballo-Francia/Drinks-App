const { Router } = require('express');
const indexReviews = require('./reviews.routes');

const router = Router();

router.use('/reviews', indexReviews)

module.exports = router;