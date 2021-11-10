const pkg = require("mongoose");
const { Schema, model } = pkg;


const categorySchema = new Schema({    
    name: {
      type: String,
      required: false,
      trim: true
    }
    }, {
      versionKey: false,
      timestamps: true
    });

module.exports =  model("Category", categorySchema);