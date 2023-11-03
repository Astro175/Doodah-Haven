const express = require('express');
const router = express.Router();
const { addOrder,
    getAllOrders,
    getOrder,
    deleteOrder 
} = require('../controllers/orderController');
// const isAdmin = require('../middleware/isAdmin');
const requireLogin = require("../middleware/requireLogin");

// Create a new order, ADMIN-ACCESS ONLY
router.post('/add', requireLogin, addOrder);

// Retrieves all orders
router.get('/', requireLogin, getAllOrders);

// Retrieves a particular order
router.get('/:id', requireLogin, getOrder);

// Deletes an order
router.post('/delete/:id', requireLogin, deleteOrder);

module.exports = router;