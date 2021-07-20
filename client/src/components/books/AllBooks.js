import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import getAll from "../../utils/getAll";
import Card from "../ui/Card";

import axios from "axios";

//TODO: add search filter

// console.log(new URL(URL));
// console.log(window.location.pathname);

function AllBooks(props) {
  const [books, setBooks] = useState([]);
  let bookGridStyle;
  let bookTitleStyle;

  useEffect(() => {
    getAll("books", setBooks);
  }, []);

  //IIFE where book grid style changes based on URL pathname
  (function bookGridStyles() {
    if (window.location.pathname === "/books") {
      bookGridStyle = "book-grid--all-books";
      bookTitleStyle = "book-card-title--all-books";
    } else if (window.location.pathname === "/") {
      bookGridStyle = "book-grid--front-page";
      bookTitleStyle = "book-card-title--front-page";
    }
  })();

  return (
    <div className={bookGridStyle}>
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
              <div className={bookTitleStyle}>
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
