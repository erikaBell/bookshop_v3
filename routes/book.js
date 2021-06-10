const express = require('express');
const router = express.Router();

const request = require('../controllers/book')

router.get('/books', request.getAll)
router.get('/books/:id', request.getById) 
router.post('/books', request.create)
router.put('/books/:id', request.updateById)
router.delete('/books/:id', request.deleteById)

module.exports = router;
