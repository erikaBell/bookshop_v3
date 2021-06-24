import React, { useState, useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import getAll from "../utils/getAll"
import axios from 'axios';

function AllBooks()  {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAll('books', setBooks)
    }, []);

    return(
        <div className="BooksContainer">
            {books.map(book => {
               return (
                   <Link to={`/books/${book._id}`} className="BookContainer" data-book={book._id} key={book._id}>
                        <img className="BookImg"  data-book={book._id} alt="book cover" src={book.img} /> 
                        <p className="BookTitle" data-book={book._id}>{book.title}</p>
                   </Link>
                   )
            })}
        </div>
    )
}

export default AllBooks

