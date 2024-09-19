// const Booking = require('../models/booking');

// // Get all bookings
// exports.getAllBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find()
//       .populate('serviceId')
//       .populate('serviceProviderId')
//       .populate('customerId');
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get booking by ID
// exports.getBookingById = async (req, res) => {
//   try {
//     const booking = await Booking.findById(req.params.id)
//       .populate('serviceId')
//       .populate('serviceProviderId')
//       .populate('customerId');
//     if (!booking) return res.status(404).json({ message: 'Booking not found' });
//     res.json(booking);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create a new booking
// exports.createBooking = async (req, res) => {
//   const { serviceId, serviceProviderId, customerId, location, bookingDate, status, proofImage, otp } = req.body;

//   const booking = new Booking({
//     serviceId,
//     serviceProviderId,
//     customerId,
//     location,
//     bookingDate,
//     status,
//     proofImage,
//     otp
//   });

//   try {
//     const newBooking = await booking.save();
//     res.status(201).json(newBooking);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Update a booking by ID
// exports.updateBookingById = async (req, res) => {
//   try {
//     const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true })
//       .populate('serviceId')
//       .populate('serviceProviderId')
//       .populate('customerId');
//     if (!booking) return res.status(404).json({ message: 'Booking not found' });
//     res.json(booking);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete a booking by ID
// exports.deleteBookingById = async (req, res) => {
//   try {
//     const booking = await Booking.findByIdAndDelete(req.params.id);
//     if (!booking) return res.status(404).json({ message: 'Booking not found' });
//     res.json({ message: 'Booking deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };








const { check, validationResult } = require('express-validator');
const Booking = require('../models/booking');

// Validation rules for booking data
const validateBooking = [
  check('serviceId').notEmpty().withMessage('Service ID is required').trim().escape(),
  check('serviceProviderId').notEmpty().withMessage('Service Provider ID is required').trim().escape(),
  check('customerId').notEmpty().withMessage('Customer ID is required').trim().escape(),
  check('location').notEmpty().withMessage('Location is required').trim().escape(),
  check('bookingDate').isISO8601().withMessage('Booking Date must be a valid date'),
  check('status').notEmpty().withMessage('Status is required').trim().escape(),
  check('proofImage').optional().trim().escape(),
  check('otp').optional().trim().escape()
];

// Middleware to validate request
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('serviceId')
      .populate('serviceProviderId')
      .populate('customerId');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get booking by ID
exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('serviceId')
      .populate('serviceProviderId')
      .populate('customerId');
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new booking
exports.createBooking = [
  ...validateBooking,  // Apply validation rules
  validateRequest,    // Apply validation result middleware
  async (req, res) => {
    const { serviceId, serviceProviderId, customerId, location, bookingDate, status, proofImage, otp } = req.body;

    const booking = new Booking({
      serviceId,
      serviceProviderId,
      customerId,
      location,
      bookingDate,
      status,
      proofImage,
      otp
    });

    try {
      const newBooking = await booking.save();
      res.status(201).json(newBooking);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
];

// Update a booking by ID
exports.updateBookingById = [   // Apply validation result middleware
  async (req, res) => {
    try {
      const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .populate('serviceId')
        .populate('serviceProviderId')
        .populate('customerId');
      if (!booking) return res.status(404).json({ message: 'Booking not found' });
      res.json(booking);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
];

// Delete a booking by ID
exports.deleteBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id);
    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
