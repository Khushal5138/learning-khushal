const express = require('express');
const router = express.Router();
const {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} = require('../controllers/categoryController'); // Adjust the path as needed

// Route for getting all categories
router.get('/', getCategories);

// Route for getting a single category by ID
router.get('/:id', getCategoryById);

// Route for creating a new category
router.post('/', createCategory);

// Route for updating a category by ID
router.put('/:id', updateCategory);

// Route for deleting a category by ID
router.delete('/:id', deleteCategory);

module.exports = router;
