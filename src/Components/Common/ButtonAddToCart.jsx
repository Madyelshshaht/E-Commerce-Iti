import React, { useState, useEffect } from "react";
import { UseCart } from "../../Context/CartProvider";
import { Spinner } from "react-bootstrap";
import { useUser } from "../../Context/UserProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./style.css"

import { FaHeart, FaRegHeart } from 'react-icons/fa';
import LoadingSpinner from "./LoadingSpinner";

const ButtonAddToCart = ({ productId, max, wishlistLoading, isInWishlist, handleWishlistToggle, isAdmin }) => {

    const navigate = useNavigate();

    const { cart, addToCart } = UseCart();
    const [isDebouncing, setIsDebouncing] = useState(false);

    // Check if found in Cart
    const existingItem = cart.items.find(item => item.productId === productId);
    const quantityInCart = existingItem ? existingItem.quantity : 0;
    // const availableStock = max - quantityInCart;
    const isOutOfStock = quantityInCart >= max;
    // Disa[led Button if the stock is sold
    const isDisabled = isOutOfStock || isDebouncing;

    const { user, token } = useUser();

    // Debounce effect
    useEffect(() => {
        if (!isDebouncing) return;

        const debounce = setTimeout(() => setIsDebouncing(false), 400);
        return () => clearTimeout(debounce);
    }, [isDebouncing]);

    // Add To Cart
    const handleAddToCart = () => {
        if (isDisabled) return;

        if (token) {
            addToCart(user.id, productId, 1);
            setIsDebouncing(true);
        }
        // you must Login to can Add product in cart
        else {
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
                {
                    isOutOfStock
                        ? "Out of Stock"
                        : isDebouncing
                            ? (
                                <div>
                                    <span className="fw-semibold">Loading...</span>
                                    <Spinner animation="border" size="sm" variant="info" className="ms-2" />
                                </div>
                            )
                            : "Add to Cart"
                }
            </button>
            {/* Admin change the Palce of heart in admin to Handel Responsive design to can make Edit and Delete and wish or No */}
            {isAdmin && (
                <div
                    className=" bg-light p-1 shadow rounded-1 btn-heart "
                    onClick={handleWishlistToggle}
                >
                    {wishlistLoading ? (
                        <Spinner animation="border" size="sm" variant="info">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
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
