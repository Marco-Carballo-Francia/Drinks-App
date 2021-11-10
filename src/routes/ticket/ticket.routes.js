const { Router } = require("express");
const { makePayment, getTicketsInPending, createTicket } = require("./ticket.controller.js")

const router = Router();

router.post("/checkout", makePayment);
router.get("/pending", getTicketsInPending);
router.post("/create", createTicket);

module.exports =  router;