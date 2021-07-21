import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CartContext from "../components/store/cart-context";
import CartItem from "../components/layout/CartItem";

//TODO: add users Items to DB
//TODO: Link for Continue Browsing, and Checkout
//TODO: add total
const CartPage = (props) => {
  const cartCxt = useContext(CartContext);

  let content;

  if (cartCxt.totalItems === 0) {
    content = <p>Your cart is empty</p>;
  } else {
    content = (
      <div className="cart-page">
        <CartItem />
        <div className="cart-page--btn">
          <Link to={"/books"}>
            <button>Continue Browsing</button>
          </Link>
          {/* Checkout code from PayPal site */}
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_top"
          >
            <input type="hidden" name="cmd" value="_xclick" />
            <input
              type="hidden"
              name="business"
              value="er1k4smerika@yahoo.com"
            />
            <input type="hidden" name="lc" value="US" />
            <input
              type="hidden"
              name="item_name"
              value="Donation for Erika (-;"
            />
            <input type="hidden" name="button_subtype" value="services" />
            <input type="hidden" name="no_note" value="0" />
            <input type="hidden" name="currency_code" value="USD" />
            <input
              type="hidden"
              name="bn"
              value="PP-BuyNowBF:btn_buynowCC_LG.gif:NonHostedGuest"
            />
            <input
              className="cart-page--input-styling"
              type="button"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <button
              alt="checkout button"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
            >
              Checkout{" "}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <section className="cart-page-container">
      <h1 className="cart-page--header">Cart</h1>
      {content}
    </section>
  );
};

export default CartPage;
