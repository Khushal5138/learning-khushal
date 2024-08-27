var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const productsSchema = Schema({
  name: {
    type: String,
    required: true,
    maxLength :  25 , minLength : 5
  },
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: String,
    enum: ['available' , 'unavailable'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("products", productsSchema);