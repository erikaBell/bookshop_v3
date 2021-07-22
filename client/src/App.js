import React from "react";
import { Route, Switch } from "react-router-dom";
import "./_Sass/App.scss";

import MainNav from "./components/layout/MainNav";
import UserLogin from "./components/user/UserLogin";
import NewUser from "./components/user/NewUser";
// import Address from "./components/address/Address";
import AllAuthors from "./pages/AuthorsPage";
import Author from "./pages/AuthorPage";
import AllBooks from "./pages/BooksPage";
import Book from "./pages/BookPage";

import NewBookPage from "./pages/NewBookPage";
import Cart from "./pages/CartPage";
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
