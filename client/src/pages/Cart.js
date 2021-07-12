import React, { useContext, useEffect } from "react";
import CartContext from "../components/store/cart-context";
import CartItem from "../components/cart/CartItem";

const CartPage = (props) => {
  const cartCxt = useContext(CartContext);

  return (
    <section className="cart-page">
      <h1>Check Out</h1>
      <div>
        {cartCxt.items.map((book) => {
          return (
            <div>
              <a
                to={`/books/${book._id}`}
                className="BookContainer"
                data-id={book._id}
                key={book._id}
              >
                <img
                  className="BookImg"
                  data-book={book._id}
                  alt="book cover"
                  src={book.img}
                />
                <p className="BookTitle" data-book={book._id}>
                  {book.title}
                </p>
              </a>
            </div>
          );
        })}
      </div>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </section>
  );
};

export default CartPage;
