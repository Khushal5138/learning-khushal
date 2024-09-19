


// const Rating = require('../models/rating');

// // Get all ratings
// exports.getRatings = async (req, res) => {
//   try {
//     const ratings = await Rating.find().populate('related_to');  // Only populate task relation
//     res.json(ratings);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get a single rating by ID
// exports.getRatingById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const rating = await Rating.findById(id).populate('related_to');

//     if (!rating) {
//       return res.status(404).json({ message: 'Rating not found' });
//     }

//     res.status(200).json(rating);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create a new rating
// exports.createRating = async (req, res) => {
//   const rating = new Rating({
//     score: req.body.score,
//     comment: req.body.comment,
//     customerID: req.body.customerID,
//     related_to: req.body.related_to,  // Ensure the task ID is passed in the request
//   });

//   try {
//     const newRating = await rating.save();
//     res.status(201).json(newRating);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Update a rating
// exports.updateRating = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { score, comment, related_to } = req.body;

//     const rating = await Rating.findByIdAndUpdate(
//       id,
//       { score, comment, customerID, related_to },
//       { new: true, runValidators: true }
//     );

//     if (!rating) {
//       return res.status(404).json({ message: 'Rating not found' });
//     }

//     res.status(200).json(rating);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Delete a rating
// exports.deleteRating = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const rating = await Rating.findByIdAndDelete(id);

//     if (!rating) {
//       return res.status(404).json({ message: 'Rating not found' });
//     }

//     res.status(200).json({ message: 'Rating deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };




const { check, validationResult } = require('express-validator');
const Rating = require('../models/rating');

// Get all ratings
exports.getRatings = async (req, res) => {
  try {
    const ratings = await Rating.find().populate('related_to');  // Only populate task relation
    res.json(ratings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single rating by ID
exports.getRatingById = async (req, res) => {
  try {
    const { id } = req.params;
    const rating = await Rating.findById(id).populate('related_to');

    if (!rating) {
      return res.status(404).json({ message: 'Rating not found' });
    }

    res.status(200).json(rating);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new rating
exports.createRating = [
  // Validation and sanitization
  check('score').isNumeric().withMessage('Score must be a number').trim().escape(),
  check('comment').optional().trim().escape(),
  check('customerID').notEmpty().withMessage('Customer ID is required').trim().escape(),
  check('related_to').optional().notEmpty().withMessage('Related task ID is required').trim().escape(),

  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { score, comment, customerID, related_to } = req.body;

    const rating = new Rating({
      score,
      comment,
      customerID,
      related_to,
    });

    try {
      const newRating = await rating.save();
      res.status(201).json(newRating);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
];

// Update a rating
exports.updateRating = [
  // Validation and sanitization
  check('score').optional().isNumeric().withMessage('Score must be a number').trim().escape(),
  check('comment').optional().trim().escape(),
  check('related_to').optional().trim().escape(),

  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { id } = req.params;
      const { score, comment, related_to } = req.body;

      const rating = await Rating.findByIdAndUpdate(
        id,
        { score, comment, related_to },
        { new: true, runValidators: true }
      );

      if (!rating) {
        return res.status(404).json({ message: 'Rating not found' });
      }

      res.status(200).json(rating);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
];

// Delete a rating
exports.deleteRating = async (req, res) => {
  try {
    const { id } = req.params;
    const rating = await Rating.findByIdAndDelete(id);

    if (!rating) {
      return res.status(404).json({ message: 'Rating not found' });
    }

    res.status(200).json({ message: 'Rating deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
