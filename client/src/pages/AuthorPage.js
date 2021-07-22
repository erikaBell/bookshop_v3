import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import getById from "../utils/getById";
import axios from "axios";

//TODO: add all books with this authorId to page
const AuthorInfo = () => {
  let { authorId } = useParams();

  const [author, setAuthor] = useState({});

  useEffect(() => {
    getById("authors", authorId, setAuthor);
  }, []);

  return (
    <div class="BookContainer">
      <h1> AUTHOR SHOW PAGE</h1>
      <p className="BookItem BookTitle">{author.fullName}</p>
      <p className="Book-item Book-item2">{author.description}</p>
      <p className="Book-item Book-item3">{author.books}</p>
      <Link to="/authors"> Back to all authors</Link>
    </div>
  );
};

export default AuthorInfo;
