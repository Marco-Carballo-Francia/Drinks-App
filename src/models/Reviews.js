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
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = model("Reviews", reviewsSchema);