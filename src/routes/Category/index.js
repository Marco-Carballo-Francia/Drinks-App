const { Router } = require('express');
const indexCategory = require('./category.routes');

const router = Router();

router.use('/category', indexCategory);

module.exports = router;