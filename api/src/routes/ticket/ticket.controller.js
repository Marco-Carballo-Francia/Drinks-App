const Ticket = require("../../models/Ticket");

 const getTicket = async (req, res) => {
  console.log(req.body)
  res.json("Recibido")
};

module.exports = {
    getTicket
}