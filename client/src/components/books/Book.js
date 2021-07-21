import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import PropTypes from "prop-types";
import CartContext from "../store/cart-context";
import Card from "../ui/Card";
import getById from "../../utils/getById";
import create from "../../utils/create";

//TODO: book.author.name, book.author.desc .... create diff. way to interact? or leave.
const BookInfo = (props) => {
  let { bookId } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    getById("books", bookId, setBook);
  }, []);

  const cartCtx = useContext(CartContext);
  const itemIsAdded = cartCtx.itemIsAdded(book._id);

  function toggleCartItem() {
    if (itemIsAdded) {
      cartCtx.removeItem(book._id);
    } else {
      cartCtx.addItem({
        _id: book._id,
        img: book.img,
        title: book.title,
        author: book.author,
        description: book.description,
        price: book.price,
      });
    }
  }

  return (
    <section className="book-page-container">
      <h1> BOOK SHOW PAGE</h1>
      <div className="book-card-container">
        <div className="book-card--cover-container book-page--cover">
          <img className="book-card--cover" src={book.img} />
        </div>
        <div className="book-page--info">
          <p className="book-card-title">{book.title}</p>
          <p className="book-author">By {book.author}</p>
          <p className="book-price">${book.price}</p>
          <button className="book-page--btn" onClick={toggleCartItem}>
            {itemIsAdded ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
        <p className="book-description">{book.description}</p>
        <Link className="book-page--link" to="/books">
          Back to all books
        </Link>
      </div>
    </section>
  );
};

export default BookInfo;
