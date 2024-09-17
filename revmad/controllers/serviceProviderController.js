const ServiceProvider = require('../models/serviceProvider');

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

// Create a new service provider
exports.createServiceProvider = async (req, res) => {
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
};

// Update a service provider
exports.updateServiceProvider = async (req, res) => {
  try {
    const serviceProvider = await ServiceProvider.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('rating');
    if (!serviceProvider) {
      return res.status(404).json({ message: 'ServiceProvider not found' });
    }
    res.json(serviceProvider);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

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
