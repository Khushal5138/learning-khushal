const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your_jwt_secret_key'; 

// Get all admins
router.get('/', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get admin by ID
router.get('/:id', async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new admin
router.post('/', async (req, res) => {
  const { name, phone, password } = req.body;
  const admin = new Admin({ name, phone, password });

  try {
    const newAdmin = await admin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update an admin by ID
router.put('/:id', async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    admin.name = req.body.name || admin.name;
    admin.phone = req.body.phone || admin.phone;
    admin.password = req.body.password || admin.password; // Handle password update

    const updatedAdmin = await admin.save();
    res.json(updatedAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an admin by ID
router.delete('/:id', async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) return res.status(404).json({ message: 'Admin not found' });
    res.json({ message: 'Admin deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Admin login
router.post('/login', async (req, res) => {
  const { phone, password } = req.body;

  try {
    const admin = await Admin.findOne({ phone: phone.trim() });

    if (!admin) {
      return res.status(401).json({ message: 'Invalid phone number or password' });
    }

    const isMatch = await admin.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid phone number or password' });
    }

    const token = jwt.sign({ id: admin._id, phone: admin.phone }, JWT_SECRET, {
      expiresIn: '1h'
    });

    res.status(200).json({ message: 'Login successful', token });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
