
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./style.css";
import { UseCart } from '../../../Context/CartProvider';
import { useWishlist } from '../../../Context/Wishlist/WishlistProvider';
import { PiListHeart } from "react-icons/pi";


const WishNav = () => {
    const { wishlistCount } = useWishlist()

    const [isAnimate, setIsAnimate] = useState(false);


    useEffect(() => {
        if (wishlistCount === 0) {
            return;
        }
        setIsAnimate(true);

        const debounce = setTimeout(() => {
            setIsAnimate(false);
        }, 300);

        return () => clearTimeout(debounce);
    }, [wishlistCount]);

    return (
        <>
            <Link to="/wishlist" className='text-decoration-none text-black fw-bold d-flex align-items-center'>
                <div className="pe-4 position-relative">
                    <div
                        className={`quantity-whis position-absolute text-white rounded-circle d-flex justify-content-center align-items-center fw-lighter 
                        ${isAnimate ? "pumpAnimate" : ""}`}
                    >
                        {wishlistCount}
                    </div>

                    <span><PiListHeart size={25} /></span>
                </div>
                <span className='fw-bold wish'>Wishlist</span>
            </Link>

        </>
    )
}

export default WishNav