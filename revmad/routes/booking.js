const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Get all bookings
router.get('/', bookingController.getAllBookings);

// Get booking by ID
router.get('/:id', bookingController.getBookingById);

// Create a new booking
router.post('/', bookingController.createBooking);

// Update a booking by ID
router.put('/:id', bookingController.updateBookingById);

// Delete a booking by ID
router.delete('/:id', bookingController.deleteBookingById);

module.exports = router;
