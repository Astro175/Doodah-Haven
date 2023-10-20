const Product = require('../models/productModel');
const mongoose = require('mongoose');
const fs = require("fs");

// List all products: GET /api/products
const getAllProducts = async (req, res) => {
    try {
    const products = Product.find({}).sort({createdAt: -1})
    res.status(200).json({products});
    } catch (error) {
        res.status(500).send({error: error.message})
    }
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

// Create a new product (admin-only): POST /api/products/add
const addProduct = async (req, res) => {
    try {
        const { name, description, price, brand, stock_quantity, label } = req.fields;
        const { photo1, photo2, photo3 } = req.files;
        //validation
        switch (true) {
          case !name:
            return res.status(500).send({ error: "Name is Required" });
          case !description:
            return res.status(500).send({ error: "Description is Required" });
          case !price:
            return res.status(500).send({ error: "Price is Required" });
          case !brand:
            return res.status(500).send({ error: "Brand is Required" });
          case !stock_quantity:
            return res.status(500).send({ error: "Stock Quantity is Required" });
          case !label:
            return res.status(500).send({ error: "Label is Required" });
          case
          (photo1 && photo1.size > 2000000) ||
          (photo2 && photo2.size > 2000000) ||
          (photo3 && photo3.size > 2000000):
            return res
              .status(500)
              .send({ error: "Photos are Required and should be less then 2mb" });
        }
        
    
        const products = new Product({ ...req.fields });
        if (photo1) {
          products.photo1.data = fs.readFileSync(photo1.path);
          products.photo1.contentType = photo1.type;
        }
        if (photo2) {
          products.photo2.data = fs.readFileSync(photo2.path);
          products.photo2.contentType = photo2.type;
        }
        if (photo3) {
          products.photo3.data = fs.readFileSync(photo3.path);
          products.photo3.contentType = photo3.type;
        }
        await products.save();
        res.status(201).send({
          message: "Product Created Successfully",
          products,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          error: error.message
        });
      }
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

const searchProduct = async (req, res) => {
  try {
    const { keyword } = req.params;
    const results = Product.find({
      $or: [
        {name: {$regex: keyword, $options:'i'}},
        {description: {$regex: keyword, $options:'i'}},
      ]
    }).select(`~photo`);
    res.status(200).json({ results });
  } catch(err) {
    console.log(error);
    res.status(400).json({ error: `Something went wrong`})
  }
}

module.exports = {
    getAllProducts,
    getAProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    filterProduct,
    searchProduct
};