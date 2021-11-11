const { Router } = require('express');
const { getCategories, postCategory } = require('./category.controllers');

const router = Router();

router.get('/', getCategories);
router.post('/create', postCategory);

module.exports = router;