'use strict';
const express = require('express');
const router = express.Router();

// Load Book model
const Author = require('../models/Author');

// @description create/save 
// @access Public
// function getAuthorWithBooks(fullName){
//   return Author.findOne({ fullName: fullName })
//     .populate('books').exec((err, books) => {
//       console.log("Populated Author " + books);
//     })
// }

const create = async (req, res) => {
try { 
    console.log(req.body) 
    const response = new Author({
        fullName: req.body.fullName,
        description: req.body.description
        // books: req.body.books
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
        const response = await Author.find()
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
        const response = await Author.findById(req.params.id)
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
        await Author.findByIdAndUpdate(req.params.id, req.body)
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
        await Author.findByIdAndRemove(req.params.id, req.body)
        return res.json({ mgs: 'Author entry deleted successfully' })
    }
    catch (error) {
        res.status(404).json({ error: 'No such Author' })
    }
}

module.exports = {
    create,
    getAll,
    getById,
    updateById,
    deleteById,
    // getAuthorWithBooks,
}