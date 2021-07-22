import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../cart/cart-context";

const MainNav = () => {
  const cartCxt = useContext(CartContext);
  return (
    <header className="nav-container">
      <nav>
        <NavLink className="nav-item" to="/">
          Erika's Bookshop
        </NavLink>

        <NavLink className="nav-item" to="/books">
          Books
        </NavLink>

        <NavLink className="nav-item" to="/authors">
          Authors
        </NavLink>

        <NavLink className="nav-item" to="/new-book">
          Add New Book
        </NavLink>

        <NavLink className="nav-item" to="/users/log-in">
          Login
        </NavLink>

        <NavLink className="nav-item" to="/users/sign-up">
          Sign Up
        </NavLink>
        <NavLink className="nav-item" to="/cart">
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
