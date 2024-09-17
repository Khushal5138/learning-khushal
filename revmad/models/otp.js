// const mongoose = require('mongoose');

// const otpSchema = new mongoose.Schema({
//   phone: {
//     type: String,
//     required: true,
//   },
//   otp: {
//     type: String,
//     required: true
//   },
//   expiresAt: {
//     type: Date,
//     required: true
//   },
//   ratingLink: {
//     type: String,
//     required: true  // Make sure ratingLink is required
//   },
//   filesUpload: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'FileUpload' 
//   }
// });

// module.exports = mongoose.model('OTP', otpSchema);




const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = new Schema({
  phone: {
    type: String,
    required: true
  },
  otp: {
    type: String,
    required: true
  },
  expiresAt: {
    type: Date,
    required: true
  },
  ratingLink: {
    type: String,
    required: true
  },
  filesUpload: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FileUpload',
    required: true
  }
});

const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;
