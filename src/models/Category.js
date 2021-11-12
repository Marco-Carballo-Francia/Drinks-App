const pkg = require("mongoose");
const { Schema, model } = pkg;


const categorySchema = new Schema({    
    nombre: {
      type: String,
      required: false,
      trim: true
    }
    // listItems: [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'Item'
    // }]
    }, {
      versionKey: false,
      timestamps: false
    });

module.exports =  model("Category", categorySchema);