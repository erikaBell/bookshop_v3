import React, { useRef } from "react";

import Card from "../ui/Card";

const NewBookForm = (props) => {
  const bookTitleRef = useRef();
  const bookImageRef = useRef();
  const bookPriceRef = useRef();
  const bookDescRef = useRef();
  const authorNameRef = useRef();
  const authorDescRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredTitle = bookTitleRef.current.value;
    const enteredImage = bookImageRef.current.value;
    const enteredPrice = bookPriceRef.current.value;
    const enteredBookDesc = bookDescRef.current.value;
    const enteredAuthor = authorNameRef.current.value;
    const enteredAuthorDesc = authorDescRef.current.value;

    const bookData = {
      title: enteredTitle,
      img: enteredImage,
      price: enteredPrice,
      description: enteredBookDesc,
      author: enteredAuthor,
    };

    const authorData = {
      fullName: enteredAuthor,
      description: enteredAuthorDesc,
    };

    props.onAddBook(bookData);
    props.onAddAuthor(authorData);
  };

  return (
    <Card>
      <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="title">Book Title</label>
          <input type="text" required id="title" ref={bookTitleRef}></input>
        </div>
        <div className="control">
          <label htmlFor="image">Book Image</label>
          <input type="url" required id="image" ref={bookImageRef}></input>
        </div>
        <div className="control">
          <label htmlFor="b-description">Book Description</label>
          <textarea required id="b-description" ref={bookDescRef}></textarea>
        </div>
        <div className="control">
          <label htmlFor="price">Book Price</label>
          <input
            type="number"
            step="0.01"
            required
            id="price"
            ref={bookPriceRef}
          ></input>
        </div>
        <div className="control">
          <label htmlFor="author">Author Name</label>
          <input type="text" required id="author" ref={authorNameRef}></input>
        </div>
        <div className="control">
          <label htmlFor="a-description">Author Description</label>
          <textarea required id="a-description" ref={authorDescRef}></textarea>
        </div>
        <div className="actions">
          <button>Add Book</button>
        </div>
      </form>
    </Card>
  );
};

export default NewBookForm;
