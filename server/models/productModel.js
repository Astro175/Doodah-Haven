const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"]
  },
  description: {
    type: String,
    required: [true, "Product description is required"]
  },
  price: {
    type: Number,
    required: [true, "Product price is required"]
  },
  brand: {
    type: String,
    required: [true, "Product brand is required"]
  },
  stock_quantity: {
    type: Number,
    required: [true, "Product stock quantity is required"]
  },
  photo1: {
    data: Buffer,
    contentType: String
  },
  photo2: {
    data: Buffer,
    contentType: String
  },
  photo3: {
    data: Buffer,
    contentType: String
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      rating: {
        type: Number,
        required: [true, "Review rating is required"]
      },
      comment: {
        type: String
      }
    }
  ]
}, {timestamps: true}); // Added timestamp for sorting products that were added recently

const Product = mongoose.model('Product', productSchema);
module.exports = Product;