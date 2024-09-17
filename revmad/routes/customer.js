const express = require('express');
const router = express.Router();
const {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer
} = require('../controllers/customerController');

const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret_key';

const Customer = require('../models/customer');

// Route for getting all customers
router.get('/', getCustomers);

// Route for getting a single customer by ID
router.get('/:id', getCustomerById);

// Route for creating a new customer
router.post('/', createCustomer);

// Route for updating a customer by ID
router.put('/:id', updateCustomer);

// Route for deleting a customer by ID
router.delete('/:id', deleteCustomer);

// Login route
router.post('/login', async (req, res) => {
  const { phone, password } = req.body;

  try {
    console.log('Received phone:', phone); // Debugging log
    const customer = await Customer.findOne({ phone: phone.trim() }); // Trim spaces

    if (!customer) {
      console.log('Customer not found'); // Debugging log
      return res.status(401).json({ message: 'Invalid phone number or password' });
    }

    const isMatch = await customer.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid phone number or password' });
    }

    const token = jwt.sign({ id: customer._id, phone: customer.phone }, JWT_SECRET, {
      expiresIn: '1h'
    });

    res.status(200).json({ message: 'Login successful', token });

  } catch (error) {
    console.error('Error during login:', error); // Debugging log
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
