import React, {useState, useEffect} from "react"
import getAll from "../utils/getAll"
import axios from 'axios';

const Context = React.createContext({})

function ContextProvider({children}) {
    const [allBooks, setAllBooks] = useState([])
    const [cartItems, setCartItems] = useState([])
    
    useEffect(() => {
        getAll('books', setAllBooks)
    }, [])
    
    function addToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }
    
    console.log(cartItems)
    
    return (
        <Context.Provider value={{allBooks, cartItems, addToCart}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}


  // function toggleFavorite(id) {
    //     const updatedArr = allBooks.map(book => {
    //         if(book._id === id) {
    //             return {...book, isFavorite: !book.isFavorite}
    //         }
    //         return book
    //     })
        
    //     setAllBooks(updatedArr)
    // }