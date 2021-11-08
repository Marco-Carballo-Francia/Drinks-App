const { Router } = require("express");
const ticketRouter = require('./ticket.routes.js');

const router = Router();

router.use('/ticket', ticketRouter)

module.exports =  router;