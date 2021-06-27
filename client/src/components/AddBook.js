import React, { useState, useEffect, useRef} from 'react';
import UserLogin from '../components/UserLogin';
import create from "../utils/create"
import axios from 'axios';

//TODO: only isAdmin: true can access

function AddBook() {
  const [token, setToken] = useState();

  const [state, setState] = useState({
      img: '',
      title: '',
      author: '',
      description: '',
      price: ''
  });
  
  const handleChange = e => {
      setState(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value
      }));
  };

  //TODO: check the Author table to either create / pair author ID to author, or create a new row in Author table, connected to the newly input Author Name 
  const onClick = async () => {
    create({
      img: state.img,
      title: state.title,
      author: state.author,
      description: state.description,
      price: state.price
      }, 'books', setState,
    )
  }

  // if(!token) {
  //     return <UserLogin setToken={setToken} />
  // } 
  //TODO: get request that checks if user has isAdmin: true

  return (
    <div>
      <h3>Log a new book</h3>
      <form>
        <input
          type="text"
          onChange={handleChange}
          // value={state.title}
          placeholder="Book Title"
          name="title"
        />
        <br></br>
        <input
          type="text"
          onChange={handleChange}
          // value={state.author}
          placeholder="Author"
          name="author"
        />
        <br></br>
        <input
          type="text"
          onChange={handleChange}
          // value={state.description}
          placeholder="Book Description"
          name="description"
        />
        <br></br>
        <input
          type="number"
          min="0.00"
          onChange={handleChange}
          value={state.price}
          placeholder="Book Price"
          name="price"
        />
        <br></br>
        <input
          type="text"
          onChange={handleChange}
          // value={state.img}
          placeholder="Book Image URL"
          name="img"
        />
        <br></br>
        <button
          className="btn btn-large right"
          onClick={onClick}
        >
          Log Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;