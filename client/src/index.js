import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import { CartContextProvider } from "./components/cart/cart-context";

ReactDOM.render(
  <CartContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartContextProvider>,
  document.getElementById("root")
);
