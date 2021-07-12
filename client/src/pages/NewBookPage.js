import React from "react";
import NewBookForm from "../components/books/NewBookForm";

import axios from "axios";

import add from "../utils/add";
// import getAll from "../../utils/getAll";

//TODO: show success or failure message ... etc

const NewBookPage = () => {
  const addBookHandler = async (bookData) => {
    // await console.log(bookData);
    await add("books", bookData);
  };
  const addAuthorHandler = async (authorData) => {
    // console.log(authorData);
    await add("authors", authorData);
  };

  return (
    <section>
      <h1>Add New Book </h1>
      <NewBookForm onAddBook={addBookHandler} onAddAuthor={addAuthorHandler} />
    </section>
  );
};

export default NewBookPage;
