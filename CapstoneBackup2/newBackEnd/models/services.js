// const mongoose = require('mongoose');

// const serviceSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   serviceProvider: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Admin',  // Assuming service provider is an admin
//     required: true
//   },
//   category: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Category',  // Assuming category is a category model
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   rating: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Rating'  // Assuming rating is a rating model
//   }
// });

// const Service = mongoose.model('Service', serviceSchema);

// module.exports = Service;



const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  serviceProvider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceProvider',
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  ratings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rating'
  }]
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
