const express = require('express');
const {
    getAllProducts,
    getAProduct,
    addProduct,
    updateProduct, 
    deleteProduct,
    filterProduct,
    searchProduct,
} = require('../controllers/productController');
const isAdmin = require('../middleware/isAdmin');
const requireLogin = require("../middleware/requireLogin");
const formidable = require("express-formidable");

const router = express.Router()

// Gets all product with label popular
router.get('/popular', filterProduct);

// List all products
router.get('/', getAllProducts);

// Get a product by ID
router.get('/:id', getAProduct);

// Create a new product
router.post('/add', requireLogin, isAdmin, formidable(), addProduct);

// Update a product by ID
router.put('/update/:id', requireLogin, isAdmin, updateProduct);

// Delete a product by ID
router.delete('/delete/:id', requireLogin, isAdmin, deleteProduct);

// Searches for product

router.get('/search/:keyword', searchProduct)

module.exports = router;