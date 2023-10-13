const Product = require('../models/productModel');
const mongoose = require('mongoose');

// List all products: GET /api/products
const getAllProducts = async (req, res) => {
    const products = Product.find({}).sort({createdAt: -1})
    res.status(200).json({products});
}

// Get product details: GET /api/products/:id
const getAProduct = async (req, res) => {
    const { id } = req.params;

    // Checks if the id passed is a valid mongoose id
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such product' })
    }

    const product = await Product.findById(id);

    if (!product) {
        return res.status(404).json({ error: 'No such product' });
    }
    res.status(200).json(product)
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

const filterProduct = async (req, res) => {
    const popularProducts = Product.find({label: 'popular'}).sort({createdAt: -1})
    // Gets all popular products, sorted by the newest
    res.status(200).json(popularProducts);
}

module.exports = {
    getAllProducts,
    getAProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    filterProduct
};