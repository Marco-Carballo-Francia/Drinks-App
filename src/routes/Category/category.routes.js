const { Router } = require('express');
const { getCategories, postCategory, updateCategory } = require('./category.controllers');

const router = Router();

router.get('/', getCategories);
router.get("/categories", getCategories);
router.post('/create', postCategory);
router.put('/update/:id', updateCategory);

module.exports = router;