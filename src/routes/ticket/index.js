const { Router } = require("express");
const ticketRouter = require('./ticket.routes.js');

const router = Router();

router.get('/ticket', ticketRouter);

module.exports =  router;