import { Router } from "express";
import { getItems, createItem, getItemById, getCategories, filterByCategory } from "./user.controller.js";

const router = Router();

//    /admin/items
router.get("/items", getItems); // acá podría llegar /user/items?category=vodka por ejemplo
router.get("/items/categories", getCategories);
router.get("/items/filter/:category", filterByCategory);
router.post("/items", createItem);
router.get("/items/:id", getItemById);

export default router;