const pkg = require("mongoose");
const { Schema, model } = pkg;

const reviewsSchema = new Schema({
  comment: {
    type: String
  },
  rating: {
    type: String 
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  numReviews: {
		cinco: { type: Number, default: 1 },
		cuatro: { type: Number, default: 1 },
		tres: { type: Number, default: 1 },
		dos: { type: Number, default: 1 },
		uno: { type: Number, default: 1 }
	}
}, {
  versionKey: false,
  timestamps: true
});

module.exports = model("Reviews", reviewsSchema);