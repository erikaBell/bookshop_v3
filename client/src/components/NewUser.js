import React, { useState, useEffect, useRef} from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

function NewUser() {
    const [state, setState] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    });

  const handleChange = e => {
      setState(prevState => ({
          ...prevState,
          [e.target.name]: e.target.value
      }));
      console.log(state)
  };

    useEffect(() => {
        const data = {
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email
        };
        console.log(data)
        // axios.post('http://localhost:3001/api/users', data)
        //     .then(response => setState(response.data));
    }, []);

  //TODO: check the Author table to either create / pair author ID to author, or create a new row in Author table, connected to the newly input Author Name 
  const onClick = async () => {
    const data = {
            username: state.username,
            password: state.password,
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email
    };

    try {
      const newUserAdded = await axios.post('http://localhost:3001/api/users', data);
    console.log(newUserAdded.data)
    } catch (err) {
      console.log(err)
    };
  }

  return (
    <div>
      <h3>New User</h3>
      <input
        type="text"
        onChange={handleChange}
        // value={state.title}
        placeholder="Username"
        name="username"
      />
      <br></br>
      <input
        type="password"
        onChange={handleChange}
        // value={state.author}
        placeholder="Password"
        name="password"
      />
      <br></br>
      <input
        type="text"
        onChange={handleChange}
        // value={state.description}
        placeholder="First Name"
        name="firstName"
      />
      <br></br>
      <input
        type="text"
        onChange={handleChange}
        // value={state.price}
        placeholder="Last Name"
        name="lastName"
      />
      <br></br>
      <input
        type="text"
        onChange={handleChange}
        // value={state.img}
        placeholder="Email"
        name="email"
      />
      <br></br>
      <button
        className="btn btn-large right"
        onClick={onClick}
      >
      
        Sign Up
      </button>
    </div>
  );
};

export default NewUser;