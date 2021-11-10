const { Router } = require("express");
const { makePayment, getTicketsInPending, createTicket, getUserTickets } = require("./ticket.controller.js")

const router = Router();

router.post("/checkout", makePayment);
router.get("/pending", getTicketsInPending);
router.post("/create", createTicket);
router.get("/user/:id", getUserTickets);

module.exports =  router;

// 61846c626a19ab1ce0fe4642
// 61884005ec707dcfcbad85e0

