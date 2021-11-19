const { Router } = require('express');
const indexCategory = require('./category.routes');

const router = Router();

router.use('/categoria', indexCategory);

module.exports = router;