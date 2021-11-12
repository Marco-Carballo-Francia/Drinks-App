const Ticket = require("../../models/Ticket");
const Stripe = require("stripe");
const axios = require("axios").default;
const config = require("../../config.js");
const User = require('../../models/User');
const Item = require('../../models/Item')

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
    const body = { payment, cart, userId }
    let ticket = await axios.post("http://localhost:4000/ticket/create", body);
    res.json(ticket.data)
  }
  catch (error) {
    console.log(error)
  }
}

const createTicket = async (req, res) => {
  let { payment, cart, userId } = req.body;
  try {
    let user = await User.findById(userId);

    let itemCart = [];
    for (let i = 0; i < cart.length; i++) {
      let itemDB = await Item.findById(cart[i]._id);
      let qty = cart[i].qty;
      let obj = {
        item: itemDB,
        qty: qty
      }
      itemCart.push(obj);
    }
    // console.log("qTY", cart[0].qty)
    itemCart = await Promise.all(itemCart);
    // console.log('itemcart', itemCart);
    let newTicket = {
      items: itemCart,
      precioTotal: payment.amount,
      user: user._id,
      direccion: "Av Siempreviva 123",
    }
    newTicket = new Ticket(newTicket)
    newTicket = await newTicket.save()
    // console.log("NEW TICKET", newTicket)
    return newTicket;
  }
  catch (error) {
    console.log(error)
  }
}

const getTicketsInPending = async (req, res) => {
  try {
    let userTickets = await Ticket.find({ state: "Pending" })
      .populate('items')
      .populate('user', "nombre");

    let sortTickets = userTickets.sort((a, b) => {
      if (a.fecha < b.fecha) return -1;
      if (a.fecha > b.fecha) return 1;
    })
    res.json(sortTickets);

  }
  catch (error) {
    console.log(error)
  }
}

const getUserTickets = async (req, res) => {
  const { id } = req.params;
  try {
    let userTickets = await Ticket.find()
      .populate('user')
      .populate('items.item');
    // console.log("userTickets",userTickets);
    // console.log("idback",id)
    function splitt(string) {
      let id = string.split('"')
      let dividido = id[1]
      return dividido;
    }

    let tickets = userTickets.filter(x => splitt(JSON.stringify(x.user._id)) === id.toString())
    console.log("ticketsback", tickets)
    res.json(tickets);
  }
  catch (error) {
    console.log(error)
  }
}

module.exports = {
  makePayment,
  getTicketsInPending,
  createTicket,
  getUserTickets
}