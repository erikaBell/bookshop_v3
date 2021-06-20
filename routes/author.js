const express = require('express');
const router = express.Router();

const request = require('../controllers/author')

router.get('/authors', request.getAll)
router.get('/authors/:id', request.getById) 
router.post('/authors', request.create)
router.put('/authors/:id', request.updateById)
router.delete('/authors/:id', request.deleteById)

module.exports = router;
