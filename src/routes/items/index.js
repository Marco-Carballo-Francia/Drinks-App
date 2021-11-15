const { Router } =  require('express');
const itemRouter = require("./item.routes.js");

const router = Router();

router.use("/items", itemRouter);

module.exports =  router;
