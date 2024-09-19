
// const express = require('express');
// const router = express.Router();
// const {
//   getRatings,
//   createRating,
//   updateRating,
//   deleteRating
// } = require('../controllers/ratingController'); // Adjust the path as needed

// // Route for getting all ratings
// router.get('/', getRatings);

// // Route for creating a new rating
// router.post('/', createRating);

// // Route for updating a rating by ID
// router.put('/:id', updateRating);

// // Route for deleting a rating by ID
// router.delete('/:id', deleteRating);

// module.exports = router;


const express = require('express');
const router = express.Router();
const {
  getRatings,
  getRatingById,
  createRating,
  updateRating,
  deleteRating
} = require('../controllers/ratingController'); // Adjust the path as needed

// Route for getting all ratings
router.get('/', getRatings);

// Route for getting a single rating by ID
router.get('/:id', getRatingById);

// Route for creating a new rating
router.post('/', createRating);

// Route for updating a rating by ID
router.put('/:id', updateRating);

// Route for deleting a rating by ID
router.delete('/:id', deleteRating);

module.exports = router;
