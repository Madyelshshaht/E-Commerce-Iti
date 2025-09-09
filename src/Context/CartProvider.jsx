import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useUser } from './UserProvider';


const cartContext = createContext(null);

export const UseCart = () => useContext(cartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState({
        cartId: null,
        userId: null,
        totalAmount: 0,
        items: []
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { user, token } = useUser();

    const GetCartItems = async () => {
        if (!user?.id) return;
        try {
            setLoading(true);
            const res = await axios.get(`http://clicktobuy.runasp.net/api/ShoppingCarts/GetAllShoppingCart`, {
                params: { userId: user.id }
            });
            let data = res.data

            if (Array.isArray(data)) {
                data = data[0] || { cartId: null, userId: null, totalAmount: 0, items: [] };
            }

            if (!data.items) {
                data.items = [];
            }
            setCart(data);
        } catch (err) {
            setError(err.response?.data || "Failed to fetch cart");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user?.id) {
            GetCartItems();
        } else {
            setCart({
                cartId: null,
                userId: null,
                totalAmount: 0,
                items: []
            });
        }
    }, [token, user?.id]);

    const addToCart = async (userId, productId, quantity = 1) => {
        setLoading(true);
        try {

            await axios.post(
                `http://clicktobuy.runasp.net/api/ShoppingCarts/AddtoShoopingCart`,
                null,
                { params: { userId, productId, quantity } }
            );

            setCart(prev => {
                const existingItem = prev.items.find(item => item.productId === productId);

                if (existingItem) {
                    return {
                        ...prev,
                        items: prev.items.map(item =>
                            item.productId === productId
                                ? { ...item, quantity: item.quantity + quantity }
                                : item
                        ),
                    };
                } else {
                    return {
                        ...prev,
                        items: [
                            ...prev.items,
                            { productId, quantity, price: 0 },
                        ],
                    };
                }
            });


            console.log("Product Add successfully ")
            await GetCartItems();
        } catch (err) {
            setError(err.response?.data || "Failed to add item");
        } finally {
            setLoading(false);
        }
    };

    const removeFromCart = async (productId) => {
        try {
            setLoading(true);
            await axios.delete(
                `http://clicktobuy.runasp.net/api/ShoppingCarts/RemoveFromCart/${user?.id}`,
                { params: { productId } }
            );

            // setCart(prev => ({
            //     ...prev,
            //     items: prev.items.filter(item => item.productId !== productId)
            // }));

            await GetCartItems();
        }
        catch (err) {
            setError(err.response?.data || "Failed to remove item");
        } finally {
            setLoading(false);
        }
    };

    const clearCart_LogOut = () => setCart({
        cartId: null,
        userId: null,
        totalAmount: 0,
        items: []
    });

    // Clear Cart data not default UserId or CartId
    const clearCart = () => setCart(prev => ({ ...prev, items: [], totalAmount: 0 }));


    const changeQuantity = async (userId, productId, newQuantity) => {
        setLoading(true)
        try {
            const res = await axios.patch(`http://clicktobuy.runasp.net/api/ShoppingCarts/ChangeCartQuantity/${user?.id}`
                , {}, { params: { ProductId: productId, quantity: newQuantity } }
            )
            console.log("Product Quantity Edit successfully ")
            await GetCartItems();
            return true;
        } catch (err) {
            setError(err.response?.data || "Failed to Update Cart item quantity");
        } finally {
            setLoading(false)
        }
    }

    // Change quantity
    // const changeQuantity = async (id, newQuantity) => {
    //     try {
    //         setLoading(true);
    //         await axios.put(`${BASE_URL}/UpdateQuantity/${id}`, null, {
    //             params: { quantity: newQuantity },
    //         });
    //         await GetCartItems();
    //     } catch (err) {
    //         setError(err.response?.data || "Failed to update quantity");
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // Place Order
    // const placeOrder = async (userId) => {
    //     try {
    //         setLoading(true);
    //         const res = await axios.post(`${BASE_URL}/PlaceOrder`, null, {
    //             params: { userId },
    //         });
    //         setCart([]); // بعد الطلب بنفضي الكارت
    //         return res.data; // ممكن يرجع OrderId أو رسالة نجاح
    //     } catch (err) {
    //         setError(err.response?.data || "Failed to place order");
    //     } finally {
    //         setLoading(false);
    //     }
    // };


    const getTotalQuantity = () =>
        cart.items?.reduce((sum, item) => sum + item.quantity, 0);

    const getTotalPrice = () =>
        cart.items?.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <cartContext.Provider value={{ cart, loading, error, setCart, addToCart, getTotalQuantity, getTotalPrice, removeFromCart, clearCart, changeQuantity, clearCart_LogOut }}>
            {children}
        </cartContext.Provider>
    )
}

export default CartProvider
