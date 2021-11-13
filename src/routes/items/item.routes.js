const { Router } = require("express");
const { 
    getItems, 
    createItem,
    getItemById,
    // updateItemUser,
    updateItem
} = require("./item.controller.js");

const router = Router();

//    /user
router.get("/items", getItems);  // problemas para filtrar las categorias por cambios en el modelo
// router.get("/items/categories", getCategories);  //problemas para traer las categorias por cambios en el modelo
// router.put("/items/update/:id", updateItemUser);
router.post("/items/create", createItem);  //falta la parte ed la reviews, hay q relacionarlas
router.get("/items/:id", getItemById); 
router.put("/items/update/:id", updateItem);

//618c28aa8264eae2657d8df3

module.exports = router;