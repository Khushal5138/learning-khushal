// const ServiceProvider = require('../models/serviceProvider');

// const jwt = require('jsonwebtoken');

// const bcrypt = require('bcryptjs');

// const JWT_SECRET = 'your_jwt_secret_key';


// // Get all service providers
// exports.getServiceProviders = async (req, res) => {
//   try {
//     const serviceProviders = await ServiceProvider.find().populate('rating'); 
//     res.json(serviceProviders);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get service provider by ID
// exports.getServiceProviderById = async (req, res) => {
//   try {
//     const serviceProvider = await ServiceProvider.findById(req.params.id).populate('rating');
//     if (!serviceProvider) {
//       return res.status(404).json({ message: 'ServiceProvider not found' });
//     }
//     res.json(serviceProvider);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create a new service provider
// exports.createServiceProvider = async (req, res) => {
//   const serviceProvider = new ServiceProvider({
//     name: req.body.name,
//     email: req.body.email,
//     description: req.body.description,
//     phone: req.body.phone,
//     password: req.body.password,
//     priceRange: req.body.priceRange,
//     rating: req.body.rating,
//   });

//   try {
//     const newServiceProvider = await serviceProvider.save();
//     res.status(201).json(newServiceProvider);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Update a service provider
// exports.updateServiceProvider = async (req, res) => {
//   try {
//     const serviceProvider = await ServiceProvider.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('rating');
//     if (!serviceProvider) {
//       return res.status(404).json({ message: 'ServiceProvider not found' });
//     }
//     res.json(serviceProvider);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete a service provider
// exports.deleteServiceProvider = async (req, res) => {
//   try {
//     const serviceProvider = await ServiceProvider.findByIdAndDelete(req.params.id);
//     if (!serviceProvider) {
//       return res.status(404).json({ message: 'ServiceProvider not found' });
//     }
//     res.json({ message: 'ServiceProvider deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };


// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Find the service provider by email
//     const serviceProvider = await ServiceProvider.findOne({ email });
    
//     if (!serviceProvider) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Compare the provided password with the hashed password in the database
//     const isMatch = await bcrypt.compare(password, serviceProvider.password);

//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid email or password' });
//     }

//     // Generate JWT token after successful login
//     const token = jwt.sign(
//       { id: serviceProvider._id, email: serviceProvider.email }, // Payload data
//       JWT_SECRET, // Secret key for signing
//       { expiresIn: '1h' } // Token expiration time
//     );

//     // Return the token and success message
//     res.status(200).json({
//       message: 'Login successful',
//       token: token, // Send the token to the client
//       serviceProvider: {
//         _id: serviceProvider._id,
//         name: serviceProvider.name,
//         email: serviceProvider.email,
//         description: serviceProvider.description,
//         phone: serviceProvider.phone,
//         priceRange: serviceProvider.priceRange
//       }
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };








const { body, validationResult } = require('express-validator');
const ServiceProvider = require('../models/serviceProvider');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const JWT_SECRET = 'your_jwt_secret_key';

// Get all service providers
exports.getServiceProviders = async (req, res) => {
  try {
    const serviceProviders = await ServiceProvider.find().populate('rating');
    res.json(serviceProviders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get service provider by ID
exports.getServiceProviderById = async (req, res) => {
  try {
    const serviceProvider = await ServiceProvider.findById(req.params.id).populate('rating');
    if (!serviceProvider) {
      return res.status(404).json({ message: 'ServiceProvider not found' });
    }
    res.json(serviceProvider);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new service provider with validation and sanitization
exports.createServiceProvider = [
  // Validate and sanitize input fields
  body('name').trim().notEmpty().isLength({ max : 20 }).withMessage('Name is required').escape(),
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('description').trim().notEmpty().withMessage('Description is required').escape(),
  body('phone').trim().isLength({ min: 10, max: 10 }).withMessage('Phone must be 10 digits').escape(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('priceRange').trim().notEmpty().withMessage('Price range is required').escape(),

  // Controller logic
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Create a new service provider
    const serviceProvider = new ServiceProvider({
      name: req.body.name,
      email: req.body.email,
      description: req.body.description,
      phone: req.body.phone,
      password: req.body.password,
      priceRange: req.body.priceRange,
      rating: req.body.rating,
    });

    try {
      const newServiceProvider = await serviceProvider.save();
      res.status(201).json(newServiceProvider);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
];

// Update a service provider with validation and sanitization
exports.updateServiceProvider = [
  // Validate and sanitize input fields
  body('name').optional().isLength({ max : 20 }).trim().escape(),
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('description').optional().trim().escape(),
  body('phone').optional().trim().isLength({ min: 10, max: 10 }).withMessage('Phone must be 10 digits').escape(),
  body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('priceRange').optional().trim().escape(),

  // Controller logic
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const serviceProvider = await ServiceProvider.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('rating');
      if (!serviceProvider) {
        return res.status(404).json({ message: 'ServiceProvider not found' });
      }
      res.json(serviceProvider);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
];

// Delete a service provider
exports.deleteServiceProvider = async (req, res) => {
  try {
    const serviceProvider = await ServiceProvider.findByIdAndDelete(req.params.id);
    if (!serviceProvider) {
      return res.status(404).json({ message: 'ServiceProvider not found' });
    }
    res.json({ message: 'ServiceProvider deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login with validation and JWT token generation
exports.login = [
  // Validate and sanitize input fields
  body('email').isEmail().withMessage('Valid email is required').normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),

  async (req, res) => {
    const { email, password } = req.body;

    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Find the service provider by email
      const serviceProvider = await ServiceProvider.findOne({ email });

      if (!serviceProvider) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Compare the provided password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, serviceProvider.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
      }

      // Generate JWT token after successful login
      const token = jwt.sign(
        { id: serviceProvider._id, email: serviceProvider.email },
        JWT_SECRET,
        { expiresIn: '1h' }
      );

      // Return the token and success message
      res.status(200).json({
        message: 'Login successful',
        token: token,
        serviceProvider: {
          _id: serviceProvider._id,
          name: serviceProvider.name,
          email: serviceProvider.email,
          description: serviceProvider.description,
          phone: serviceProvider.phone,
          priceRange: serviceProvider.priceRange
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
];
