import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import getAll from "../../utils/getAll";
import axios from "axios";

//TODO: check database for user, and check if user isAdmin
//TODO: jwtoken stored in storage, use token to look for var isAdmin and either display "addBook" or hide

export default function Login() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAll("users", setUsers);
  }, []);

  return (
    <form>
      <label>
        {console.log(users)}
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired
// }
