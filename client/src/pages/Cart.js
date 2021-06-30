import React, {useContext, useEffect} from "react"
import CartContext from "../components/CartContext"
import CartItem from "../components/CartItem"

const CartPage = props => {
     const context = useContext(CartContext);

     useEffect(() => {
         console.log(context);
     }, []);

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {/* {console.log(context.item)} */}
            <p className="total-cost">Total: </p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default CartPage