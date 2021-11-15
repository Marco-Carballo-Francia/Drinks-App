const { Router } =  require('express');
const itemRouter = require("./item.routes.js");

const router = Router();

router.use("/user", itemRouter);

module.exports =  router;
