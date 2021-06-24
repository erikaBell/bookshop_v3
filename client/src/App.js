import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import './App.css';
//TODO: make error page
// import CartContext from "./components/CartContext"

import UserLogin from './components/UserLogin';
import NewUser from './components/NewUser';
import Address from './components/Address';
import AllAuthors from './components/AllAuthors';
import Author from './components/Author';
import AllBooks from './components/AllBooks';
import Book from './components/Book';
import AddBook from './components/AddBook';
import Cart from './pages/Cart';


function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div class="HeaderContainer">

          <NavLink
            className="NavbarItem"
            to="/"
          > Erika's Bookshop </NavLink>

          <NavLink
            className="NavbarItem"
            to="/books"
          > Books </NavLink>

          <NavLink
            className="NavbarItem"
            to="/authors"
          > Authors </NavLink>

          <NavLink
            className="NavbarItem"
            to="/add-book"
          > Add Book </NavLink>

          <NavLink
            className="NavbarItem"
            to="/users/log-in"
          > Login </NavLink>
          
          <NavLink
            className="NavbarItem"
            to="/users/sign-up"
          > Sign Up </NavLink>
          <NavLink
            className="NavbarItem"
            to="/cart"
          > Cart </NavLink>

          <Switch>
            <Route exact path='/authors/:authorId' component={Author} />
            <Route exact path='/authors/' component={AllAuthors} />
            <Route exact path='/books/:bookId' component={Book} />
            <Route exact path='/books' component={AllBooks} />
            <Route exact path='/add-book' component={AddBook} />
            <Route exact path='/users/log-in' component={UserLogin} />
            <Route exact path='/users/sign-up' component={NewUser} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
            {/* <Route path='/address' component={Address} />
            <Route path='/book/' component={Book} /> */}
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
