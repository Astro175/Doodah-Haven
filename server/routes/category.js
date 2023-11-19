const express = require('express');
const { getACategory,
    getAllCategories,
    updateCategory,
    removeCategory,
    createCategory } = require('../controllers/categoryController');
const requireLogin = require('../middleware/requireLogin');
const isAdmin = require('../middleware/isAdmin');
const router = express.Router();

// Retrieves all categories
router.get('/', requireLogin, getAllCategories);

// Creates a new category
router.post('/', requireLogin, isAdmin, createCategory);


// Deletes a category
router.delete('/:slug', requireLogin, isAdmin, removeCategory);

// Updates a category
router.patch(':/slug', requireLogin, isAdmin, updateCategory);

// Gets a single category
router.get('/:slug', requireLogin, isAdmin, getACategory);

module.exports = router;