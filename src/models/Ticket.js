const pkg = require("mongoose");
const { Schema, model } = pkg;

const TicketSchema = new Schema({
    fecha:{
        type: Date,
        default: Date.now,
        required: true
    },
    numOrden:{
        type: Number,
        required: true
    },
    item:[{
        item:{
            type: Schema.Types.ObjectId,
            ref: 'Item',
            required: true
        },
        cantidad:{
            type: Number,
            required: true
        },
    }],
    precioTotal: {
        type: Number,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    state:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    metodoPago: {
        type: String,
        required: true
    }
});

module.exports =  model('Ticket', ticketSchema);