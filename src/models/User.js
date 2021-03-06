const pkg = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema, model } = pkg;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    contraseña: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        trim: true
    },
    apellido: {
        type: String,
        trim: true
    },
    documento: {
        type: String,
    },
    imagen: {
        type: String,
    },
    direccion: {
        type: String,
    },
    piso: {
        type: Number,
    },
    departamento: {
        type: String,
    },
    estadoProvincia: {
        type: String,
    },
    ciudad: {
        type: String,
    },
    codigoPostal: {
        type: Number,
    },
    fechadenacimiento: {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    },
    favoritos: [{
        type: Schema.Types.ObjectId,
        ref: 'Item'
    }],
    telefono: {
        type: Number
    },
    itemList: [{
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        },
        qtyCart: {
            type: Number,
            default: 1
        },
    }],
    ticketHistory: [{
        ticket: {
            type: Schema.Types.ObjectId,
            ref: 'Ticket'
        }
    }],
});

UserSchema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.contraseña, 10);
    this.contraseña = hash;
    next();
})

UserSchema.methods.isValidContraseña = async function (contraseña) {
    const user = this;
    const compara = await bcrypt.compare(contraseña, user.contraseña);
    return compara;
}

module.exports = model("User", UserSchema);