const Product = require('../models/productModel');

// List all products: GET /api/products
const getAllProducts = async (req, res) => {
    res.json({message: "All Users"});
}

// Get product details: GET /api/products/:id
const getAProduct = async (req, res) => {
    res.json({message: "A product deatil"});
}

// This is just a test, we will implement a middleware
// To allow access to only admin user to the endpoints below

// Create a new product (admin-only): POST /api/products/add
const addProduct = async (req, res) => {
    res.json({message: "Add a product"});
};

// Update a product (admin-only): PUT /api/products/update/:id
const  updateProduct = async (req, res) => {
    res.json({message: "Update a product"});
}

// Delete a product (admin-only): DELETE /api/products/delete/:id
const  deleteProduct = async (req, res) => {
    res.json({message: "Delete a Product"});
}

module.exports = {
    getAllProducts,
    getAProduct,
    addProduct,
    updateProduct,
    deleteProduct
};