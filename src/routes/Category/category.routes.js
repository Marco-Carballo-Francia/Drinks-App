const { Router } = require('express');
const { getCategorias, postCategoria, updateCategoria, getCategoriasByName,deleteCategoria } = require('./category.controllers');

const router = Router();

// categoria
router.get('/', getCategorias);
// router.get("/categoria/:nombre", getCategoriasByName);
router.post('/create', postCategoria);
router.put('/update/:id', updateCategoria);
router.delete('/delete/:id', deleteCategoria);

module.exports = router;