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
    <Card>
      <div class="BookContainer">
        <h1> BOOK SHOW PAGE</h1>
        <img className="BookItem BookImg" src={book.img} />
        <p className="BookItem BookTitle">{book.title}</p>
        <p className="BookItem BookTitle">By {book.author}</p>
        <p className="Book-item Book-item2">{book.description}</p>
        <p className="Book-item Book-item3">{book.price}</p>
        <button className="" onClick={toggleCartItem}>
          {itemIsAdded ? "Remove from Cart" : "Add to Cart"}
        </button>
        <Link to="/books"> Back to all books</Link>
      </div>
    </Card>
  );
};

export default BookInfo;
