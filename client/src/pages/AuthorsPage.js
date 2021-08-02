import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getAll from "../utils/getAll";
import axios from "axios";

function AllAuthors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAll("authors", setAuthors);
  }, []);

  return (
    <div className="BooksContainer">
      {authors.map((author) => {
        return (
          <Link to={`/authors/${author._id}`} className="" key={author._id}>
            <p className="">{author.fullName}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default AllAuthors;
