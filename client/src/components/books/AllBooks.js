import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import getAll from "../../utils/getAll";
import Card from "../ui/Card";

import axios from "axios";

//TODO: add search filter

function AllBooks(props) {
  const [books, setBooks] = useState([]);
  let bookGridStyle;
  let bookTitleStyle;

  useEffect(() => {
    getAll("books", setBooks);
  }, []);

  return (
    <div className="book-grid--all-books">
      {books.map((book) => {
        return (
          <div className="book-card-container">
            <Link to={`/books/${book._id}`} data-id={book._id} key={book._id}>
              <div className="book-card--cover-container">
                <img
                  className="book-card--cover"
                  data-book={book._id}
                  alt="book cover"
                  src={book.img}
                />
              </div>
              <div className="book-card-title--all-books">
                <p className="book-title" data-book={book._id}>
                  <b>{book.title}</b>
                </p>
              </div>
              <div>by {book.author}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default AllBooks;
