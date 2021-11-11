const { Router } = require("express");
const { 
    getItems, 
    createItem, 
    getItemById, 
    getCategories, 
    // updateItemUser 
} = require("./item.controller.js");

const router = Router();

//    /user/items
router.get("/items", getItems); // acá podría llegar /user/items?category=vodka por ejemplo
router.get("/items/categories", getCategories);
// router.put("/items/update/:id", updateItemUser);
router.post("/items", createItem);
router.get("/items/:id", getItemById);

//618c28aa8264eae2657d8df3

module.exports = router;