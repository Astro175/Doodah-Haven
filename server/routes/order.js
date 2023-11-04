const express = require('express');
const router = express.Router();
const { addOrder,
    getAllOrders,
    getOrder,
    deleteOrder,
    UpdateOrder,
} = require('../controllers/orderController');
const isAdmin = require('../middleware/isAdmin');
const requireLogin = require("../middleware/requireLogin");

// Create a new order
router.post('/add', requireLogin, addOrder);

// Retrieves all orders
router.get('/', requireLogin, getAllOrders);

// Retrieves a particular order
router.get('/:id', requireLogin, getOrder);

// Deletes an order, REQUIRES ADMIN-ACCESS
router.delete('/:id', requireLogin,  isAdmin, deleteOrder);

//Updates an order, REQUIRES ADMIN-ACCESS
router.patch('/:id', requireLogin, isAdmin, UpdateOrder);

module.exports = router;