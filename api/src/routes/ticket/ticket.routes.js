const { Router } = require("express");
const {getTicket} = require("./ticket.controller.js")

const router = Router();

router.post("/checkout", getTicket )

module.exports =  router;