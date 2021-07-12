import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import getAll from "../../utils/getAll";
import Card from "../ui/Card";

import axios from "axios";

function AllBooks(props) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll("books", setBooks);
  }, []);

  return (
    <div className="BooksContainer">
      {books.map((book) => {
        return (
          <Card>
            <Link
              to={`/books/${book._id}`}
              className="BookContainer"
              data-id={book._id}
              key={book._id}
            >
              <img
                className="BookImg"
                data-book={book._id}
                alt="book cover"
                src={book.img}
              />
              <p className="BookTitle" data-book={book._id}>
                {book.title}
              </p>
            </Link>
          </Card>
        );
      })}
    </div>
  );
}

export default AllBooks;
