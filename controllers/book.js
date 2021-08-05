"use strict";
const express = require("express");
const router = express.Router();

// Load Book model
const Book = require("../models/Book");

// @description create/save
// @access Public
// Book.findOne({author: req.body.author}, function (err, author) {
//         if (author) {
//             console.log(author)
//         }
//         else {
//             console.log(err, 'AUTHOR DOES NOT EXIST')
//         }
//     })

const create = async (req, res) => {
  try {
    //TODO: check for author, if not create, get author id from creation / or existing
    const response = new Book({
      img: req.body.img,
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      feature: req.body.feature,
      price: req.body.price,
    });

    await response.save();
    return res.send(response);
  } catch (error) {
    console.log(error);
  }
};

// @description Get all
// @access Public
const getAll = async (req, res) => {
  try {
    const response = await Book.find();
    return res.json(response);
  } catch (error) {
    res.status(404).send(error);
  }
};

// @description Get by id
// @access Public
const getById = async (req, res) => {
  try {
    const response = await Book.findById(req.params.id);
    return res.json(response);
  } catch (error) {
    res.status(404).send(error);
  }
};

// @description Update by id
// @access Public
const updateById = async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body);
    return res.json({ msg: "successful" });
  } catch (error) {
    res.status(400).json({ error: "Unable to update the Database" });
  }
};

// @description Delete by id
// @access Public
const deleteById = async (req, res) => {
  try {
    await Book.findByIdAndRemove(req.params.id, req.body);
    return res.json({ mgs: "Book entry deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: "No such a book" });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};
