const { Router } = require('express');
const { 
    getReviews, 
    postReviews 
} = require('./reviews.controllers');

const router = Router();

// reviews
router.get('/', getReviews);
router.post('/create', postReviews);

module.exports = router;