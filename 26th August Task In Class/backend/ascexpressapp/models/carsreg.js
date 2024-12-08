var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const CarsSchema = Schema({
  username: {
    type: String,
    required: true,
    maxLength :  100 , minLength : 5
  },
  email: {
    type: String,
    required: true,
    maxLength :  100 , minLength : 5
  },
  password: {
    type: String,
    required: true,
    maxLength :  100 , minLength : 5
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male" , "female"],
    required: true,
  },
  dob: {

    type: Date,
    required: true,

  },
  city: {
    type: String,
    required: true,
    maxLength :  100 , minLength : 5
  },
  profession: {
    type: String,
    enum: ['IT' , 'Sales' , 'Unemployed'],
    required: true,
  },
  isValid: {
    type: Boolean,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("carsreg", CarsSchema);