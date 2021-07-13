import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";

//TODO: add function to remove individual books from cart
function CartItem() {
  const cartCtx = useContext(CartContext);

  function removeBook() {
    console.log("REMOVED");
  }

  return (
    <div>
      {cartCtx.items.map((book) => {
        return (
          <div className="cartItemContainer">
            <Link
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
            </Link>
            <div>
              <Link
                to={`/books/${book._id}`}
                className="BookContainer"
                data-id={book._id}
                key={book._id}
              >
                <p className="BookTitle" data-book={book._id}>
                  {book.title}
                </p>
              </Link>
              <p className="BookAuthor" data-book={book._id}>
                {book.author}
              </p>
            </div>
            <p className="BookPrice" data-book={book._id}>
              {book.price}
            </p>
            <button onClick={removeBook}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default CartItem;

// <div>
//     {cartCxt.items.map((book) => {
//         return (
//         <div>
//             <a
//             to={`/books/${book._id}`}
//             className="BookContainer"
//             data-id={book._id}
//             key={book._id}
//             >
//             <img
//                 className="BookImg"
//                 data-book={book._id}
//                 alt="book cover"
//                 src={book.img}
//             />
//             <p className="BookTitle" data-book={book._id}>
//                 {book.title}
//             </p>
//             </a>
//         </div>
//         );
//     })}
// </div>

//  <Link
//     to={`/books/${book._id}`}
//     className="BookContainer"
//     data-id={book._id}
//     key={book._id}
// >
//     <img
//     className="BookImg"
//     data-book={book._id}
//     alt="book cover"
//     src={book.img}
//     />
//     <p className="BookTitle" data-book={book._id}>
//     {book.title}
//     </p>
// </Link>
