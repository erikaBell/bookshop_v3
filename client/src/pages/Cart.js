import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../components/store/cart-context";
import CartItem from "../components/layout/CartItem";

//TODO: add users Items to DB
//TODO: Link for Continue Browsing, and Checkout
const CartPage = (props) => {
  const cartCxt = useContext(CartContext);

  let content;

  if (cartCxt.totalItems === 0) {
    content = <p>Your cart is empty</p>;
  } else {
    content = (
      <div>
        <CartItem />
        <Link to={"/books"}>
          <button>Continue Browsing</button>
        </Link>
        <button>Check Out</button>
      </div>
    );
  }

  return (
    <section className="cart-page">
      <h1>Check Out Cart</h1>
      {content}
    </section>
  );
};

export default CartPage;
