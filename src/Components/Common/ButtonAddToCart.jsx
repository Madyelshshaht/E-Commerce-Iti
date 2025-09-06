import React, { useState, useEffect } from "react";
import { UseCart } from "../../Context/CartProvider";
import { Spinner } from "react-bootstrap";

const ButtonAddToCart = ({ productId, title, price, max, img  }) => {
    const { cart, addToCart } = UseCart();
    const [isDebouncing, setIsDebouncing] = useState(false);

    const existingItem = cart.find(item => item.id === productId);
    const quantityInCart = existingItem ? existingItem.quantity : 0;
    const availableStock = max - quantityInCart;
    const isOutOfStock = quantityInCart >= max;
    const isDisabled = isOutOfStock || isDebouncing;

    // Debounce effect
    useEffect(() => {
        if (!isDebouncing) return;

        const debounce = setTimeout(() => setIsDebouncing(false), 300);
        return () => clearTimeout(debounce);
    }, [isDebouncing]);

    const handleAddToCart = () => {
        if (isDisabled) return;

        addToCart({ id: productId, title, price, max, img });
        setIsDebouncing(true);
    };

    return (
        <button
            className={`btn w-100 text-white px-4 ${isDisabled ? 'btn-secondary cursor-not-allowed opacity-75' : 'btn-info'} `}
            onClick={handleAddToCart}
            disabled={isDisabled}
        >
            {isOutOfStock
                ? "Out of Stock"
                : isDebouncing
                    ? <><Spinner animation="border" size="sm" /> Loading...</>
                    : "Add to Cart"
            }
        </button>
    );
};

export default ButtonAddToCart;
