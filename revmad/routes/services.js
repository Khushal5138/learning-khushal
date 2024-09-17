const express = require('express');
const router = express.Router();
const {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService
} = require('../controllers/serviceController');

// Get all services
router.get('/', getAllServices);

// Get service by ID
router.get('/:id', getServiceById);

// Create a new service
router.post('/', createService);

// Update a service by ID
router.put('/:id', updateService);

// Delete a service by ID
router.delete('/:id', deleteService);

module.exports = router;
