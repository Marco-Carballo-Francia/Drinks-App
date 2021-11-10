const pkg = require("mongoose");
const { Schema, model } = pkg;

const reviewsSchema = new Schema({
  coment: {
    type: String
  },
  rating: {
    type: String 
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    requie
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = model("Reviews", reviewsSchema);