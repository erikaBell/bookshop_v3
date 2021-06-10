'use strict';
const express = require('express');
const router = express.Router();

// Load Book model
const User = require('../models/User');

// @description create/save 
// @access Public
const create = async (req, res) => {
try { 
    const response = new User({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        addressId: req.body.addressId,
        })
        await response.save()
        return res.send(response)
    } 
    catch (error) {
        res.status(400).json({ error: 'Unable to add User to the Database' })
    }
}

// @description Get all
// @access Public
const getAll = async (req, res) => {
    try {
        const response = await User.find()
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
        const response = await User.findById(req.params.id)
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
        await User.findByIdAndUpdate(req.params.id, req.body)
        return res.json({msg: 'successful'})
    }
    catch (error) {
        res.status(400).json({ error: 'Unable to update the Database' })
    }
}

// @description Delete by id
// @access Public
const deleteById = async (req, res) => {
    try{
        await User.findByIdAndRemove(req.params.id, req.body)
        return res.json({ mgs: 'User entry deleted successfully' })
    }
    catch (error) {
        res.status(404).json({ error: 'No such User' })
    }
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
}