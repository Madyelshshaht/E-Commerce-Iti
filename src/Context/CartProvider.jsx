import React, { createContext, useContext, useState } from 'react'


const cartContext = createContext(null);

export const UseCart = () => useContext(cartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    console.log(cart);

    const addToCart = (product) => {
        setCart((prev) => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1, max: product.max }];
        });
    }

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };



    const clearCart = () => setCart([]);


    const changeQuantity = (id, newQuantity) => {
        setCart((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };


    const getTotalQuantity = () =>
        cart.reduce((sum, item) => sum + item.quantity, 0);

    const getTotalPrice = () =>
        cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <cartContext.Provider value={{ cart, setCart, addToCart, getTotalQuantity, getTotalPrice, removeFromCart, clearCart , changeQuantity }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider