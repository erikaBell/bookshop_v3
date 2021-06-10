const express = require('express');
const router = express.Router();

const request = require('../controllers/user')

router.get('/users', request.getAll)
router.get('/users/:id', request.getById) 
router.post('/users', request.create)
router.put('/users/:id', request.updateById)
router.delete('/users/:id', request.deleteById)

module.exports = router;
