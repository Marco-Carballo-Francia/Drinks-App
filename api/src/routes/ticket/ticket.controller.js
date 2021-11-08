const Ticket = require("../../models/Ticket");
const Stripe = require("stripe");
const axios = require("axios");
const config =  require("../../config.js");

const stripe = new Stripe(config.STRIPE_SECRET_KEY)

const makePayment = async (req, res) => {
  const { id, amount, cart, userId } = req.body;
  try {
    let payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Some description",
      payment_method: id,
      confirm: true
    })
    console.log("PAYMENT", payment);
    const body = { payment, cart, userId }
    await axios.post("/ticket/create", body);
    res.send({message: "Success"})
  }
  catch (error) {
    console.log(error)
    res.json({message: error.raw.message})
  }
}

const createTicket = async (req, res) => {
  let { payment, cart, userId } = req.body;
  try {
    let user = await User.findById(userId)
    let newTicket = {
      items: cart,
      precioTotal: payment.amount,
      user: user,
      direccion: "Av Siempreviva 123",
    }
    newTicket = new Ticket(newTicket)
    newTicket = await newTicket.save()
    res.json(newTicket);
  }
  catch (error) {
    console.log(error)
  }
}

const getTickets = async (req, res) => {
  const { id } = req.params;
  try {
    let userTickets = await Tickets.find({'user._id': id })
    res.json(userTickets);
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