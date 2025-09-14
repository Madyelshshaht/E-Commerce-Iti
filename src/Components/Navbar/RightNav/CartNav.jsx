import React, { useEffect, useState } from 'react'
import "./style.css";
import { Link } from 'react-router-dom';
import { UseCart } from '../../../Context/CartProvider';
import { GrCart } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";

import { IoCart } from "react-icons/io5";




const CartNav = () => {

    const { getTotalQuantity } = UseCart()

    const [isAnimate, setIsAnimate] = useState(false);


    useEffect(() => {
        if (getTotalQuantity() === 0) {
            return;
        }
        setIsAnimate(true);

        const debounce = setTimeout(() => {
            setIsAnimate(false);
        }, 300);

        return () => clearTimeout(debounce);
    }, [getTotalQuantity()]);

    return (
        <>
                <Link to="/cart" className='text-decoration-none text-black fw-bold d-flex align-items-center'>
                    <div className="pe-4 position-relative">
                        <div
                            className={`quantity-cart position-absolute text-white rounded-circle d-flex justify-content-center align-items-center fw-lighter 
                        ${isAnimate ? "pumpAnimate" : ""}`}
                        >
                            {getTotalQuantity()}
                        </div>

                        <span><IoCartOutline size={25} /></span>
                    </div>
                    <span className='fw-bold cart'>Cart</span>
                </Link>

        </>
    )
}

export default CartNav