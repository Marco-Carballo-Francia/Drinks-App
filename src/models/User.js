const pkg = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema, model } = pkg;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    contraseña: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        //required: true,
        trim: true
    },
    // apellido: {
    //     type: String,
    //     trim: true
    // },
    // direccion: {
    //     type: String
    // },
    // telefono:{
    //     type:String,
    // },
    // admin:{
    //     type: Boolean,
    //     default: false
    // },
    // itemList:[{
    //     item:{
    //         type: Schema.Types.ObjectId,
    //         ref: 'Item',
    //     }
    // }],
    // ticketHistory:[{
    //     ticket:{
    //         type: Schema.Types.ObjectId,
    //         ref: 'Ticket',
    //     }
    // }],
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