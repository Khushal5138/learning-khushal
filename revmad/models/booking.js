const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  serviceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  serviceProviderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ServiceProvider',
    required: true
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  location: {
    type: String,
    required: true
  },
  bookingDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'canceled'],
    default: 'pending'
  },
  proofImage: {
    type: String  // URL or path to the image
  },
  otp: {
    type: Number,
    required: true
  }
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
