// const Service = require('../models/services');

// // Get all services
// exports.getAllServices = async (req, res) => {
//   try {
//     const services = await Service.find()
//       .populate('serviceProvider')  // Populate service provider
//       .populate('category')         // Populate category
//       .populate('ratings');          // Populate rating
//     res.json(services);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get service by ID
// exports.getServiceById = async (req, res) => {
//   try {
//     const service = await Service.findById(req.params.id)
//       .populate('serviceProvider')  // Populate service provider
//       .populate('category')         // Populate category
//       .populate('ratings');          // Populate rating

//     if (!service) return res.status(404).json({ message: 'Service not found' });
//     res.json(service);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create a new service
// exports.createService = async (req, res) => {
//   const { name, description, serviceProvider, category, price, ratings } = req.body;

//   const service = new Service({
//     name,
//     description,
//     serviceProvider,
//     category,
//     price,
//     ratings
//   });

//   try {
//     const newService = await service.save();
//     res.status(201).json(newService);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Update a service by ID
// exports.updateService = async (req, res) => {
//   try {
//     const service = await Service.findById(req.params.id);
//     if (!service) return res.status(404).json({ message: 'Service not found' });

//     service.name = req.body.name || service.name;
//     service.description = req.body.description || service.description;
//     service.serviceProvider = req.body.serviceProvider || service.serviceProvider;
//     service.category = req.body.category || service.category;
//     service.price = req.body.price || service.price;
//     service.rating = req.body.rating || service.rating;

//     const updatedService = await service.save();
//     res.json(updatedService);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete a service by ID
// exports.deleteService = async (req, res) => {
//   try {
//     const service = await Service.findByIdAndDelete(req.params.id);
//     if (!service) return res.status(404).json({ message: 'Service not found' });
//     res.json({ message: 'Service deleted' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };








const { check, validationResult } = require('express-validator');
const Service = require('../models/services');

// Get all services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find()
      .populate('serviceProvider')  // Populate service provider
      .populate('category')         // Populate category
      .populate('ratings');          // Populate rating
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get service by ID
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id)
      .populate('serviceProvider')  // Populate service provider
      .populate('category')         // Populate category
      .populate('ratings');          // Populate rating

    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new service
exports.createService = [
  // Validation and sanitization
  check('name').notEmpty().withMessage('Name is required').trim().escape(),
  check('description').notEmpty().withMessage('Description is required').trim().escape(),
  check('serviceProvider').notEmpty().withMessage('Service provider is required').trim().escape(),
  check('category').notEmpty().withMessage('Category is required').trim().escape(),
  check('price').isNumeric().withMessage('Price must be a number').trim().escape(),
  check('ratings').optional().isArray().withMessage('Ratings must be an array').trim().escape(),

  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, serviceProvider, category, price, ratings } = req.body;

    const service = new Service({
      name,
      description,
      serviceProvider,
      category,
      price,
      ratings
    });

    try {
      const newService = await service.save();
      res.status(201).json(newService);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
];

// Update a service by ID
exports.updateService = [
  // Validation and sanitization
  check('name').optional().trim().escape(),
  check('description').optional().trim().escape(),
  check('serviceProvider').optional().trim().escape(),
  check('category').optional().trim().escape(),
  check('price').optional().isNumeric().withMessage('Price must be a number').trim().escape(),
  check('ratings').optional().isArray().withMessage('Ratings must be an array').trim().escape(),

  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const service = await Service.findById(req.params.id);
      if (!service) return res.status(404).json({ message: 'Service not found' });

      // Update fields with sanitized values
      service.name = req.body.name || service.name;
      service.description = req.body.description || service.description;
      service.serviceProvider = req.body.serviceProvider || service.serviceProvider;
      service.category = req.body.category || service.category;
      service.price = req.body.price || service.price;
      service.ratings = req.body.ratings || service.ratings;

      const updatedService = await service.save();
      res.json(updatedService);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
];

// Delete a service by ID
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) return res.status(404).json({ message: 'Service not found' });
    res.json({ message: 'Service deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
