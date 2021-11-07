const { Router } = require("express");
const { makePayment, getTickets } = require("./ticket.controller.js")

const router = Router();

router.post("/checkout", makePayment);
router.get("/history", getTickets);

module.exports =  router;