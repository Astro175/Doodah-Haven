import { createContext, useState } from "react";

// This context will provide a way to pass the cart data and functions to all components that want to consume this context.
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };