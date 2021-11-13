const pkg = require("mongoose");
const { Schema, model } = pkg;

const itemSchema = new Schema({
	nombre: {
		type: String,
		required: true,
		trim: true
	},
	descripcion: {
		type: String,
		trim: true
	},
	precio: {
		type: String,
		required: true
	},
	imagen: {
		type: String
	},
	reviews: [{
		type: Schema.Types.ObjectId,
		ref: 'Reviews'
	}],
	categorias: [{
		type: Schema.Types.ObjectId,
		ref:'Category',
		required: true
	}],
	stock: {
		type: Number,
		required: true
	}
}, {
	versionKey: false,
	timestamps: false
});

// itemSchema.set('toJSON', {
// 	transform: (document, returnedObject) => {
// 		returnedObject.codigo = returnedObject._id
// 	}
// })

module.exports =  model("Item", itemSchema);