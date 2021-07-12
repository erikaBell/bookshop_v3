import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <header className="HeaderContainer">
      <nav>
        <NavLink className="NavbarItem" to="/">
          Erika's Bookshop
        </NavLink>

        <NavLink className="NavbarItem" to="/books">
          Books
        </NavLink>

        <NavLink className="NavbarItem" to="/authors">
          Authors
        </NavLink>

        <NavLink className="NavbarItem" to="/add-book">
          Add Book
        </NavLink>

        <NavLink className="NavbarItem" to="/new-book">
          New Book
        </NavLink>

        <NavLink className="NavbarItem" to="/users/log-in">
          Login
        </NavLink>

        <NavLink className="NavbarItem" to="/users/sign-up">
          Sign Up
        </NavLink>
        <NavLink className="NavbarItem" to="/cart">
          Cart
        </NavLink>
      </nav>
    </header>
  );
};
export default MainNav;
