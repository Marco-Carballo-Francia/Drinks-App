const { Router } = require("express");
const { 
    makePayment,
    getTicketsInPendAndPro,
    createTicket,
    getUserTicketsByID,
    updateTickets,
} = require("./ticket.controller.js")

const router = Router();

router.get("/user/:id", getUserTicketsByID);
router.get("/state", getTicketsInPendAndPro);
router.put("/state/update/:id", updateTickets);
router.post("/checkout", makePayment);
router.post("/create", createTicket);

module.exports =  router;