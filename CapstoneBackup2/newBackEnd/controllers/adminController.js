const { check, validationResult } = require('express-validator');
const Admin = require('../models/admin');

// Validation rules for admin data
const validateAdmin = [
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

// Get all admins
exports.getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single admin by ID
exports.getAdminById = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new admin
exports.createAdmin = [
  ...validateAdmin,  // Apply validation rules
  validateRequest,  // Apply validation result middleware
  async (req, res) => {
    const { name, phone, password } = req.body;

    const admin = new Admin({
      name,
      phone,
      password
    });

    try {
      const newAdmin = await admin.save();
      res.status(201).json(newAdmin);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
];

// Update an admin
exports.updateAdmin = [
  ...validateAdmin,  // Apply validation rules
  validateRequest,  // Apply validation result middleware
  async (req, res) => {
    try {
      const { id } = req.params;
      const { name, phone, password } = req.body;

      const admin = await Admin.findById(id);

      if (!admin) {
        return res.status(404).json({ message: 'Admin not found' });
      }

      admin.name = name || admin.name;
      admin.phone = phone || admin.phone;
      if (password) {
        admin.password = password;
      }

      const updatedAdmin = await admin.save();
      res.status(200).json(updatedAdmin);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
];

// Delete an admin
exports.deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findByIdAndDelete(id);

    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
