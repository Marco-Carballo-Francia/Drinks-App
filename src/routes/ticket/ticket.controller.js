const Ticket = require("../../models/Ticket");
const Stripe = require("stripe");
const axios = require("axios").default;
const config = require("../../config.js");
const User = require('../../models/User');
const Item = require('../../models/Item')

const stripe = new Stripe(config.STRIPE_SECRET_KEY);

const makePayment = async (req, res) => {
  const { id, amount, cart, userId } = req.body;
  try {
    let payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "Some description",
      payment_method: id,
      confirm: true,
    });
    const body = { payment, cart, userId };
    let ticket = await axios.post("https://pf-drinks.herokuapp.com/ticket/create", body);
    res.json(ticket.data);
  } catch (error) {
    console.log(error);
  }
};

const createTicket = async (req, res) => {
  let { payment, userId } = req.body;
  console.log(req.body);
  try {
    let user = await User.findById(userId)
    .populate('itemList.item', ['nombre', 'precio', 'imagen', 'direccion'])
    .populate('ticketHistory');
    let cart = user.itemList;

    let itemCart = [];
    for (let i = 0; i < cart.length; i++) {
      let itemDB = await Item.findById(cart[i].item);
      let qty = cart[i].qtyCart;
      let obj = {
        item: itemDB,
        qty: qty
      };
      itemCart.push(obj);
    }
    // console.log("qTY", cart[0].qty)
    itemCart = await Promise.all(itemCart);
    console.log('itemcart', itemCart);
    let newTicket = {
      items: itemCart,
      precioTotal: payment.amount,
      user: user._id,
      direccion: user.direccion,
      metodoPago: payment.payment_method
    };
    newTicket = new Ticket(newTicket);
    newTicket = await newTicket.save();
    // console.log("NEW TICKET", newTicket)
    return newTicket;
  } catch (error) {
    console.log(error);
  }
};

const getTicketsInPendAndPro = async (req, res) => {
  try {
    let userTicketsPending = await Ticket.find({ estado: "Pending" })
      .populate("items.item", ["nombre"])
      .populate("user", ["nombre"]);

    let sortTicketsPending = userTicketsPending.sort((a, b) => {
      if (a.fecha > b.fecha) return 1;
      if (a.fecha < b.fecha) return -1;
    });

    let userTicketsProcessing = await Ticket.find({ estado: "Processing" })
      .populate("items.item", ['nombre'])
      .populate("user", ["nombre"]);

    let sortTicketsProcessing = userTicketsProcessing.sort((a, b) => {
      if (a.fecha > b.fecha) return 1;
      if (a.fecha < b.fecha) return -1;
    });

    // let userTicketsFinished = await Ticket.find({ estado: "Finished" })
    //   .populate("items.item", ['nombre'])
    //   .populate("user", ["nombre"]);

    // let sortTicketsFinished = userTicketsFinished.sort((a, b) => {
    //   if (a.fecha > b.fecha) return 1;
    //   if (a.fecha < b.fecha) return -1;
    // });
    const ticketsObj = {
      pending: sortTicketsPending,
      processing: sortTicketsProcessing,
      // finished: sortTicketsFinished
    };
    console.log("PROCESSING: ", ticketsObj.processing)
    return res.json(ticketsObj);
  } catch (error) {
    console.log(error);
  }
};

const updateTickets = async (req, res) => {
  const { id } = req.params; //id del ticket
  const { changeState } = req.body; //valor que recivo para cambiar el state, recivo true
  console.log('ID', id);
  try {
    let allTickets;
    let getTicket = id ? await Ticket.findById(id) : null
    .populate("items.item", ["nombre", "precio"])
    .populate("user", ["nombre"]);
    console.log('getTicket.estado', getTicket.estado);
    if(getTicket !== null) {
      if(changeState && getTicket.estado === 'Pending') {
        console.log("TIENE QUE SER PENDING ---> ", getTicket.estado)
        let ticketUp = await Ticket.findByIdAndUpdate(
          id, { 
            estado: 'Processing' 
          }, { new: true });
        let save = await ticketUp.save();

        const { data } = await axios.get('https://pf-drinks.herokuapp.com/ticket/state');
        return data 
      }
      if(changeState && getTicket.estado === 'Processing') {
        console.log("TIENE QUE SER PROCESSING ---> ", getTicket.estado)
        let ticketUp = await Ticket.findByIdAndUpdate(
          id, { 
            estado: 'Finished' 
          }, { new: true });
        let save = await ticketUp.save();

        const { data } = await axios.get('https://pf-drinks.herokuapp.com/ticket/state');
        return res.json(data);
      }
      const { data } = await axios.get('https://pf-drinks.herokuapp.com/ticket/state')
      res.json(data)
      /* return res.json(getTicket); */
    }
    res.sattus(404).send('No se encontro el ticket solicitado');
  } catch (err) {
    console.log(err);
  }
};

const getUserTickets = async (req, res) => {
  const { id } = req.params;
  try {
    // let user = await User.findById(id)
    let userTickets = await Ticket.find()
      .populate("user")
      .populate("items.item");
  
    function splitt(string) {
      let id = string.split('"');
      let dividido = id[1];
      return dividido;
    }

    let tickets = userTickets.filter(
      (x) => splitt(JSON.stringify(x.user._id)) === id.toString()
    );

    res.json(tickets);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  makePayment,
  getTicketsInPendAndPro,
  createTicket,
  // getUserTicketsByID,
  updateTickets,
  getUserTickets
};
