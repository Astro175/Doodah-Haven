const Product = require('../models/productModel');

// List all products: GET /api/products
const getAllProducts = async (req, res) => {
    res.send('List all Products');
}

// Get product details: GET /api/products/:id
const getAProduct = async (req, res) => {
    console.log('Get a Products');
}
// This is just a test, we will implement a middleware
// To allow access to only admin user to the endpoints below

// Create a new product (admin-only): POST /api/products/add
const addProduct = async (req, res) => {
    try {
        const {
            name, description, price, brand, stock_quantity, image
        } = req.body;

        // Create new Product Instance
        const product = new Product({
            name, description, price, brand, stock_quantity, image
        });

        // Save the product to Database
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a product (admin-only): PUT /api/products/update/:id
const  updateProduct = async (req, res) => {
    console.log('Update a product');
}

// Delete a product (admin-only): DELETE /api/products/delete/:id
const  deleteProduct = async (req, res) => {
    console.log('Delete a product');
}

module.exports = {
    getAllProducts,
    getAProduct,
    addProduct,
    updateProduct,
    deleteProduct
};