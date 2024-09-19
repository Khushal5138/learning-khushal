// const Category = require('../models/category');

// // Get all categories
// exports.getCategories = async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.json(categories);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Get a single category by ID
// exports.getCategoryById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const category = await Category.findById(id);

//     if (!category) {
//       return res.status(404).json({ message: 'Category not found' });
//     }

//     res.status(200).json(category);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Create a new category
// exports.createCategory = async (req, res) => {
//   const { name, description } = req.body;

//   const category = new Category({
//     name,
//     description
//   });

//   try {
//     const newCategory = await category.save();
//     res.status(201).json(newCategory);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Update a category
// exports.updateCategory = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, description } = req.body;

//     const category = await Category.findByIdAndUpdate(
//       id,
//       { name, description },
//       { new: true, runValidators: true }
//     );

//     if (!category) {
//       return res.status(404).json({ message: 'Category not found' });
//     }

//     res.status(200).json(category);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Delete a category
// exports.deleteCategory = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const category = await Category.findByIdAndDelete(id);

//     if (!category) {
//       return res.status(404).json({ message: 'Category not found' });
//     }

//     res.status(200).json({ message: 'Category deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };



const { check, validationResult } = require('express-validator');
const Category = require('../models/category');

// Validation rules for category data
const validateCategory = [
  check('name').notEmpty().withMessage('Name is required').trim().isLength({ min : 1 , max : 20 }).escape(),
  check('description').optional().trim().isLength({ min : 10 , max : 50 }).escape()
];

// Middleware to validate request
const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single category by ID
exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new category
exports.createCategory = [
  ...validateCategory,  // Apply validation rules
  validateRequest,     // Apply validation result middleware
  async (req, res) => {
    const { name, description } = req.body;

    const category = new Category({
      name,
      description
    });

    try {
      const newCategory = await category.save();
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
];

// Update a category
exports.updateCategory = [
  ...validateCategory,  // Apply validation rules
  validateRequest,     // Apply validation result middleware
  async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;

      const category = await Category.findByIdAndUpdate(
        id,
        { name, description },
        { new: true, runValidators: true }
      );

      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }

      res.status(200).json(category);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
];

// Delete a category
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





