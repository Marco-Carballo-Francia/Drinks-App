const pkg = require("mongoose");
const { Schema, model } = pkg;

const TicketSchema = new Schema({
  fecha: {
    type: Date,
    default: Date.now,
  },
  numOrden: {
    type: Number,
  },
  items: [
    {
      item: {
        type: Schema.Types.ObjectId,
        ref: "Item",
        required: true,
      },
      qty: {
        type: Number,
      },
    },
  ],
  precioTotal: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  estado: {
    type: String,
    default: "Pending",
  },
  direccion: {
    type: String,
    required: true,
  },
  metodoPago: {
    type: String,
    required: true,
  },
});

TicketSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.numOrden = returnedObject._id
  }
})

module.exports = model("Ticket", TicketSchema);
