const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const customerSchema = new mongoose.Schema({
  name: {
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
  }
});

customerSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

customerSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
