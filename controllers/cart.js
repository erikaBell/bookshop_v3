'use strict';
const express = require('express');
const router = express.Router();

// Load Book model
const Cart = require('../models/Cart');

// @description create/save 
// @access Public
const create = async (req, res) => {
try { 
    console.log(req.body)
    
    const response = new Cart({
        userId: req.body.userId,
        books: req.body.books,
        total: req.body.total
        })
        await response.save()
        return res.send(response)
    } 
    catch (error) {
        console.log(error)
    }
}

// @description Get all
// @access Public
const getAll = async (req, res) => {
    try {
        const response = await Cart.find()
        return res.json(response)
    }
    catch (error) {
        res.status(404).send(error)
    }
};

// @description Get by id
// @access Public
const getById = async (req, res) => {
    try {
        const response = await Cart.findById(req.params.id)
        return res.json(response)
    }
    catch (error) {
        res.status(404).send(error)
    }
}

// @description Update by id
// @access Public
const updateById = async (req, res) => {
    try {
        await Cart.findByIdAndUpdate(req.params.id, req.body)
        return res.json({msg: 'successful'})
    }
    catch (error) {
        console.log(error)
    }
}

// @description Delete by id
// @access Public
const deleteById = async (req, res) => {
    try{
        await Cart.findByIdAndRemove(req.params.id, req.body)
        return res.json({ mgs: ' Entry deleted successfully' })
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
}