// import React, { useContext } from 'react';
// import ReactDOM from "react-dom";

// // Create a Context
// const CartContext = React.createContext();
// // It returns an object with 2 values:
// // { Provider, Consumer }

// function Context() {

    
//   // Use the Provider to make a value available to all
//   // children and grandchildren
//   return (
//     <CartContext.Provider value={52}>
//       <div>
//         <Display />
//       </div>
//     </CartContext.Provider>
//   );
// }

// function Display() {
//   const value = useContext(CartContext);
// //   return <div>The answer is {value}.</div>;

//   return (
//         <main className="cart-page">
//             <h1>Check out</h1>
//             {/* {console.log(value)} */}
//             {value}
//             <p className="total-cost">Total: </p>
//             <div className="order-button">
//                 <button>Place Order</button>
//             </div>
//         </main>
//     )
// }

// ReactDOM.render(<Context />, document.querySelector("#root"));
// export default CartContext