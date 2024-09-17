const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Rating Schema
const RatingSchema = new Schema({
  score: {
    type: Number,
    required: true,
    min: 1,
    max: 5,  // Ensure the score is between 1 and 5
  },
  comment: {
    type: String,
    required: true,  // Making the comment required as well
  },
  customerID: {
    type: String,
    required: true,  // Making the customerID required as well
  },
  related_to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',  
    required: false,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Rating', RatingSchema);
