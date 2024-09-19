const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const serviceProviderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/ // Basic email validation
  },
  description: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        return /^\d{10}$/.test(value); // Exactly 10 digits
      },
      message: 'Phone number must be exactly 10 digits long.'
    }
  },
  password: {
    type: String,
    required: true
  },
  priceRange: {
    type: String,
    required: true
  },
  rating: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rating'
  }
});

serviceProviderSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

serviceProviderSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const ServiceProvider = mongoose.model('ServiceProvider', serviceProviderSchema);

module.exports = ServiceProvider;
