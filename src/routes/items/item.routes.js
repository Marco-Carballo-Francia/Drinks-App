const { Router } = require("express");
const { getItems, createItem, getItemById, getCategories, updateItem } = require("./item.controller.js");

const router = Router();

//    /user/items
router.get("/items", getItems); // acá podría llegar /user/items?category=vodka por ejemplo
router.get("/items/categories", getCategories);
router.put("/items/update/:id", updateItem);
router.post("/items", createItem);
router.get("/items/:id", getItemById);

module.exports = router;