const { Router } = require('express');
const { 
    postCategory, 
    updateCategory, 
    getCategoriaByID, 
    getCategorias
} = require('./category.controllers');

const router = Router();

// categoria
router.get('/', getCategorias); //Trae por nombre y si no se le pasa uno trae todos
router.get('/:id', getCategoriaByID); //Busca por categorias
router.post('/create', postCategory); //Crea nuevas categorias
router.put('/update/:id', updateCategory);  //Actualizar categorias (SOLO CAMBAIR NOMBRE)

module.exports = router;