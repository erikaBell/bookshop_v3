// import React, { useState } from "react";

// var cartItemContext = React.createContext(null);

// export default function CartItemComponent() {

//     const [allBooks, setAllBooks] = useState([])
//     const [cartItems, setCartItems] = useState([])
    
//     useEffect(() => {
//         getAll('books', setAllBooks)
//     }, [])

//     function addToCart(newItem) {
//         setCartItems(prevItems => [...prevItems, newItem])
//     }
    

//   return (
//     <cartItemContext.Provider value={cartItems}>
//       <h1>This is the Parent Component</h1>
//       <ChildComponent cartItems={cartItems} />
//     </cartItemContext.Provider>
//   );
// }