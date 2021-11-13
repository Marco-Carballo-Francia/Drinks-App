const { Router } = require("express");
const ticketRouter = require('./ticket.routes');

const router = Router();

router.use('/ticket', ticketRouter)

module.exports =  router;