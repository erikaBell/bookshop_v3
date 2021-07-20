import React, { useState, useEffect, useRef } from "react";
import UserLogin from "../UserLogin";
import create from "../../utils/create";
import getAll from "../../utils/getAll";
import axios from "axios";

//TODO: only isAdmin: true can access
//TODO: show success of Form submit

function AddBook() {
  const [token, setToken] = useState();
  const [authorState, setAuthorState] = useState({
    fullName: "",
    description: "",
  });
  const [bookState, setBookState] = useState({
    img: "",
    title: "",
    author: "",
    description: "",
    price: "",
  });

  const handleChangeBook = (e) => {
    setBookState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleChangeAuthor = (e) => {
    setAuthorState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //TODO: render information based on if: titleExists? authorExists? ... Successful?
  const onClick = async (e) => {
    e.preventDefault();

    create(
      {
        img: bookState.img,
        title: bookState.title,
        author: bookState.author,
        description: bookState.description,
        price: bookState.price,
      },
      "books",
      setBookState
    );
    create(
      {
        fullName: bookState.author,
        description: authorState.description,
      },
      "authors",
      setAuthorState
    );
  };

  // if (!token) {
  //   return <UserLogin setToken={setToken} />;
  // }
  //TODO: get request that checks if user has isAdmin: true

  return (
    <div>
      <h3>Log new book</h3>
      <form>
        <input
          type="text"
          onChange={handleChangeBook}
          // value={bookState.title}
          placeholder="Book Title"
          name="title"
        />
        <br></br>
        <input
          type="text"
          onChange={handleChangeBook}
          value={bookState.description}
          placeholder="Book Description"
          name="description"
        />
        <br></br>
        <input
          type="number"
          min="0.00"
          onChange={handleChangeBook}
          value={bookState.price}
          placeholder="Book Price"
          name="price"
        />
        <br></br>
        <input
          type="text"
          onChange={handleChangeBook}
          // value={bookState.img}
          placeholder="Book Image URL"
          name="img"
        />
        <br></br>
        <input
          type="text"
          onChange={handleChangeBook}
          value={bookState.author}
          placeholder="Author"
          name="author"
        />
        <br></br>
        <input
          type="text"
          onChange={handleChangeAuthor}
          value={authorState.description}
          placeholder="Author Description"
          name="description"
        />
        <br></br>
        <button className="btn btn-large right" onClick={onClick}>
          Log Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
