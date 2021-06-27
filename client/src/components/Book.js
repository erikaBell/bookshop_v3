import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import {Context} from "./Context"

import PropTypes from "prop-types"
import axios from 'axios'
import getById from "../utils/getById"
import create from "../utils/create"


//TODO: book.author.name, book.author.desc
const BookInfo = () => {
  let { bookId } = useParams();

  const [book, setBook] = useState({})
  const [cart, setCart] = useState([])

  useEffect(() => {
        getById('books', bookId, setBook)
    }, []);

  //TODO: add to cart
  const onClick = async () => {
    console.log(cart)
    console.log(book)
    setCart(book)

    // create(book, 'cart', setCart)
  };

  return(
    <div class="BookContainer">
    {console.log(book)}
    <h1> BOOK SHOW PAGE</h1>
        <img className='BookItem BookImg' src={book.img} />
        <p className='BookItem BookTitle'>{book.title}</p>
        <p className='BookItem BookTitle'>By {book.author}</p>
        <p className='Book-item Book-item2'>{book.description}</p>
        <p className='Book-item Book-item3'>{book.price}</p> 
        <button className='' onClick={onClick}>Add to cart</button>
        <Link to="/books"> Back to all books</Link>
    </div>
   )
 }

export default BookInfo