const Ticket = require("../../models/Ticket");
const Stripe = require("stripe");
const axios = require("axios");

const stripe = new Stripe("...")

const makePayment = async (req, res) => {
  try {
    const { id, amount } = req.body;
    let payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Some description",
      payment_method: id,
      confirm: true
    })
    console.log(payment);
    await axios.post("/ticket/create", payment);
    res.send({message: "Success"})
  }
  catch (error) {
    console.log(error)
    res.json({message: error.raw.message})
  }
}

const getTickets = async (req, res) => {
  // tomo info del usuario (¿id? ¿email?) de algun lugar (query, params)
  try {
    let userTickets = await Tickets.find( /*traer todos los tickets de este usario*/)
    res.json(userTickets);
  }
  catch (error) {
    console.log(error)
  }
}

const createTicket = async (req, res) => {
  let payment = req.body;
  try {
    let newTicket = {
      fecha,
      numOrden,
      item,
      precioTotal,
      user,
      state,
      direccion,
      metodoPago
    }
    newTicket = new Ticket(newTicket)
    newTicket = await newTicket.save()
    res.json(newTicket);
  }
  catch (error) {
    console.log(error)
  }
}

module.exports = {
  makePayment,
  getTickets,
  createTicket
}