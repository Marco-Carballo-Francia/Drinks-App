const { Router } = require("express");
const { 
    getItems, 
    createItem, 
    getItemById, 
    updateItem,
    deleteItem
} = require("./item.controller.js");

const router = Router();

//    /items
router.get("/", getItems);  // problemas para filtrar las categorias por cambios en el modelo
// router.put("/items/update/:id", updateItemUser);
router.post("/create", createItem);  //falta la parte ed la reviews, hay q relacionarlas
router.get("/:id", getItemById); 
router.put("/update/:id", updateItem);
router.delete('/delete/:id', deleteItem);
//618c28aa8264eae2657d8df3

module.exports = router;