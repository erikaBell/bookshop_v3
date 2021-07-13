import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../store/cart-context";

const MainNav = () => {
  const cartCxt = useContext(CartContext);
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
          <span className="cartBadge">
            {cartCxt.totalItems === 0 ? null : `(${cartCxt.totalItems})`}
          </span>
        </NavLink>
      </nav>
    </header>
  );
};
export default MainNav;
