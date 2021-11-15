const { Router } = require("express");
const { 
    getItems, 
    createItem, 
    getItemById, 
    updateItem
} = require("./item.controller.js");

const router = Router();

//    /user/items
router.get("/items", getItems);  // problemas para filtrar las categorias por cambios en el modelo
// router.put("/items/update/:id", updateItemUser);
router.post("/items", createItem);  //falta la parte ed la reviews, hay q relacionarlas
router.get("/items/:id", getItemById); 
router.put("/items/update/:id", updateItem);

//618c28aa8264eae2657d8df3

module.exports = router;