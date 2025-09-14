import React, { useState, useEffect } from "react";
import { UseCart } from "../../Context/CartProvider";
import { Spinner } from "react-bootstrap";
import { useUser } from "../../Context/UserProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./style.css"

import { FaHeart, FaRegHeart } from 'react-icons/fa';

const ButtonAddToCart = ({ productId, max, wishlistLoading, isInWishlist, handleWishlistToggle, isAdmin }) => {

    const navigate = useNavigate();

    const { cart, addToCart } = UseCart();
    const [isDebouncing, setIsDebouncing] = useState(false);

    const existingItem = cart.items.find(item => item.productId === productId);
    const quantityInCart = existingItem ? existingItem.quantity : 0;
    const availableStock = max - quantityInCart;
    const isOutOfStock = quantityInCart >= max;
    const isDisabled = isOutOfStock || isDebouncing;

    const { user, token } = useUser();

    // Debounce effect
    useEffect(() => {
        if (!isDebouncing) return;

        const debounce = setTimeout(() => setIsDebouncing(false), 400);
        return () => clearTimeout(debounce);
    }, [isDebouncing]);

    const handleAddToCart = () => {
        if (isDisabled) return;

        // const userId = "64a1d147-c790-407a-bdc6-e60020d045a6";
        if (token) {
            addToCart(user.id, productId, 1);
            setIsDebouncing(true);
        } else {
            Swal.fire({
                icon: "error",
                title: "Login Required",
                text: "You must login first before adding items to the cart.",
                showCancelButton: true,
                confirmButtonText: "Go to Login",
                cancelButtonText: "Cancel",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login");
                }
            });
        }

    };

    return (
        <div className="d-flex justify-content-between align-items-center gap-2 ">
            <button
                className={`btn w-100 text-white px-md-3 ${isDisabled ? 'btn-secondary cursor-not-allowed opacity-75' : 'btn-info'} `}
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
            {isAdmin && (
                <div
                    className=" bg-light p-1 shadow rounded-1 btn-heart "
                    onClick={handleWishlistToggle}
                >
                    {wishlistLoading ? (
                        <Spinner animation="border" size="sm" className='text-info' />
                    ) : isInWishlist ? (
                        <FaHeart size={22} color="rgba(204, 33, 33, 1)" />
                    ) : (
                        <FaRegHeart size={22} color="gray" />
                    )}
                </div>
            )}


        </div>
    );
};

export default ButtonAddToCart;
