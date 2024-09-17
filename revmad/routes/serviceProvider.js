const express = require('express');
const router = express.Router();
const serviceProviderController = require('../controllers/serviceProviderController');

// Get all service providers
router.get('/', serviceProviderController.getServiceProviders);

// Get service provider by ID
router.get('/:id', serviceProviderController.getServiceProviderById);

// Create a new service provider
router.post('/', serviceProviderController.createServiceProvider);

// Update a service provider
router.put('/:id', serviceProviderController.updateServiceProvider);

// Delete a service provider
router.delete('/:id', serviceProviderController.deleteServiceProvider);

module.exports = router;
