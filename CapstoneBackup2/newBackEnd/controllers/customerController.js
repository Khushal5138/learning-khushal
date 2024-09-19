// const Customer = require('../models/customer');

// // Get all customers
// exports.getCustomers = async (req, res) => {
//   try {
//     const customers = await Customer.find();
//     res.json(customers);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get a single customer by ID
// exports.getCustomerById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const customer = await Customer.findById(id);

//     if (!customer) {
//       return res.status(404).json({ message: 'Customer not found' });
//     }

//     res.status(200).json(customer);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create a new customer
// exports.createCustomer = async (req, res) => {
//   const { name, phone, password } = req.body;

//   const customer = new Customer({
//     name,
//     phone,
//     password
//   });

//   try {
//     const newCustomer = await customer.save();
//     res.status(201).json(newCustomer);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Update a customer
// exports.updateCustomer = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, phone, password } = req.body;

//     const customer = await Customer.findById(id);

//     if (!customer) {
//       return res.status(404).json({ message: 'Customer not found' });
//     }

//     customer.name = name || customer.name;
//     customer.phone = phone || customer.phone;
//     if (password) {
//       customer.password = password;
//     }

//     const updatedCustomer = await customer.save();
//     res.status(200).json(updatedCustomer);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Delete a customer
// exports.deleteCustomer = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const customer = await Customer.findByIdAndDelete(id);

//     if (!customer) {
//       return res.status(404).json({ message: 'Customer not found' });
//     }

//     res.status(200).json({ message: 'Customer deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };




const { check, validationResult } = require('express-validator');
const Customer = require('../models/customer');

// Validation rules for customer data
const validateCustomer = [
  check('name').notEmpty().withMessage('Name is required').trim().escape(),
  check('phone').notEmpty().withMessage('Phone number is required').isMobilePhone().withMessage('Invalid phone number').trim().escape(),
  check('password').notEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long').trim().escape()
];

// Middleware to validate request
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Get all customers
exports.getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single customer by ID
exports.getCustomerById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findById(id);

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(200).json(customer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new customer
exports.createCustomer = [
  ...validateCustomer,  // Apply validation rules
  validateRequest,     // Apply validation result middleware
  async (req, res) => {
    const { name, phone, password } = req.body;

    const customer = new Customer({
      name,
      phone,
      password
    });

    try {
      const newCustomer = await customer.save();
      res.status(201).json(newCustomer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
];

// Update a customer
exports.updateCustomer = [
  ...validateCustomer,  // Apply validation rules
  validateRequest,     // Apply validation result middleware
  async (req, res) => {
    try {
      const { id } = req.params;
      const { name, phone, password } = req.body;

      const customer = await Customer.findById(id);

      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }

      customer.name = name || customer.name;
      customer.phone = phone || customer.phone;
      if (password) {
        customer.password = password;
      }

      const updatedCustomer = await customer.save();
      res.status(200).json(updatedCustomer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
];

// Delete a customer
exports.deleteCustomer = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await Customer.findByIdAndDelete(id);

    if (!customer) {
      return res.status(404).json({ message: 'Customer not found' });
    }

    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
