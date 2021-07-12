import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
//TODO: make error page
// import CartContext from "./components/CartContext"

import MainNav from "./components/layout/MainNav";

import UserLogin from "./components/UserLogin";
import NewUser from "./components/NewUser";

// import Address from "./components/Address";

import AllAuthors from "./components/AllAuthors";
import Author from "./components/Author";

import AllBooks from "./components/books/AllBooks";
import Book from "./components/books/Book";
import AddBook from "./components/books/AddBook";
import NewBookPage from "./pages/NewBookPage";

import Cart from "./pages/Cart";
import FrontPage from "./pages/FrontPage";

function App(props) {
  return (
    <div className="App">
      <MainNav />
      <Switch>
        <Route path="/authors/:authorId" exact component={Author} />
        <Route path="/authors/" exact component={AllAuthors} />

        <Route path="/books/:bookId" exact component={Book} />
        <Route path="/books" exact component={AllBooks} />
        <Route path="/add-book" exact component={AddBook} />
        <Route path="/new-book" exact component={NewBookPage} />

        <Route path="/users/log-in" exact component={UserLogin} />
        <Route path="/users/sign-up" exact component={NewUser} />

        <Route path="/cart" exact component={Cart} />

        <Route path="/" exact component={FrontPage} />
      </Switch>
      {/* <Route path='/address' component={Address} />
      <Route path='/book/' component={Book} /> */}
    </div>
  );
}

export default App;
