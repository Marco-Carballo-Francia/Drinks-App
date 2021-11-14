const { Router } = require("express");
const { 
    makePayment,
    getTicketsInPendAndPro,
    createTicket,
    getUserTicketsByID,
    updateTickets,
} = require("./ticket.controller.js")

const router = Router();

<<<<<<< HEAD
// router.get("/user/:id", getUserTickets);
=======
router.get("/user/:id", getUserTicketsByID);
>>>>>>> 032c6d11c32747e86d691c473f7945bfc326633b
router.get("/state", getTicketsInPendAndPro);
router.put("/state/update/:id", updateTickets);
router.post("/checkout", makePayment);
router.post("/create", createTicket);

module.exports =  router;