const pkg = require("mongoose");
const { Schema, model } = pkg;

const itemSchema = new Schema({
	name: {
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
	numReviews: {
		cinco: { type: Number, default: 1 },
		cuatro: { type: Number, default: 1 },
		tres: { type: Number, default: 1 },
		dos: { type: Number, default: 1 },
		uno: { type: Number, default: 1 }
	},
	categoria: [{
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
	timestamps: true
});

// itemSchema.set('toJSON', {
// 	transform: (document, returnedObject) => {
// 		returnedObject.codigo = returnedObject._id
// 	}
// })

module.exports =  model("Item", itemSchema);