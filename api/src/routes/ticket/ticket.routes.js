const { Router } = require("express");
const { makePayment, getTickets, createTicket } = require("./ticket.controller.js")

const router = Router();

router.post("/checkout", makePayment);
router.get("/history", getTickets);
router.post("/create", createTicket);

module.exports =  router;