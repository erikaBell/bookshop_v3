const express = require('express');
const router = express.Router();

const request = require('../controllers/cart')

router.get('/cart', request.getAll)
router.get('/cart/:id', request.getById) 
router.post('/cart', request.create)
router.put('/cart/:id', request.updateById)
router.delete('/cart/:id', request.deleteById)

module.exports = router;
