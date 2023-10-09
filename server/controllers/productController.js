const User = require('../models/productModel');

// List all products: GET /api/products
const getAllProducts = async (req, res) => {
    console.log('List all Products');
}

// Get product details: GET /api/products/:id
const getAProduct = async (req, res) => {
    console.log('Get a Products');
}

// Create a new product (admin-only): POST /api/products
const  createProduct = async (req, res) => {
    console.log('Create a new product');
}

// Update a product (admin-only): PUT /api/products/:id
const  updateProduct = async (req, res) => {
    console.log('Update a product');
}

// Delete a product (admin-only): DELETE /api/products/:id
const  deleteProduct = async (req, res) => {
    console.log('Delete a product');
}

module.exports = {
    getAllProducts,
    getAProduct,
    createProduct,
    updateProduct,
    deleteProduct
};