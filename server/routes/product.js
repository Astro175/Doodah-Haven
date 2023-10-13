const express = require('express');
const {
    getAllProducts, getAProduct, addProduct, updateProduct, 
    deleteProduct, filterProduct
} = require('../controllers/productController');
const isAdmin = require('../middleware/isadmin');

const router = express.Router()

// List all products
router.get('/', getAllProducts);

// Get a product by ID
router.get('/:id', getAProduct);

// Create a new product
router.post('/add', isAdmin, addProduct);

// Update a product by ID
router.put('/update/:id', isAdmin, updateProduct);

// Delete a product by ID
router.delete('/delete/:id', isAdmin, deleteProduct);

// Gets all product with label popular

router.get('/popular', filterProduct);
module.exports = router;