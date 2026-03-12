import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

function CartProvider({children}){
    const [cartItems,setCartItems] = useState([]);

    function addToCart(product){
        setCartItems([...cartItems,product]);

        toast.success(" Product added to cart");
    }

    function removeFromCart(index){
        const updatedCart = cartItems.filter((_,i)=> i !== index);
        setCartItems(updatedCart);
        toast.error(" Product removed from cart");


    }

    function clearCart(){
        setCartItems([]);
        toast.info(" Cart cleared");
    }
    
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;