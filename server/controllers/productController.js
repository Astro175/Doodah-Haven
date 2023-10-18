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
    const { 
        name, description, price, brand,
        stock_quantity, reviews, labels
     } = req.fields;
     const { image } = req.files;
     if (!name || !description || !price || 
        !brand || !stock_quantity || !reviews || !labels) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (image.size > 1000000) {
    return res.status(500).json({ error: "image should less than 1mb"});
  }
  const newProduct = Product.create({...req.fields});
  newProduct.image.data = fs.readFileSync(image.path);
  newProduct.image.contentType = image.type
  (await newProduct).save();
  res.status(400).json({
    message: "Successfully created a new Product",
    newProduct
  });
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