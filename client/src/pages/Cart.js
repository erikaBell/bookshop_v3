import React, {useContext} from "react"
import CartContext from "../components/CartContext"
import CartItem from "../components/CartItem"

function Cart() {
    
   const value = useContext(CartContext);
    
    return (
        
        <main className="cart-page">
            <h1>Check out</h1>
            {console.log(CartContext.value)}
            {value}
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart