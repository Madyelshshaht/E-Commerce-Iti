import React, { useEffect, useState } from 'react'
import { UseCart } from '../../Context/CartProvider';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { SlOptionsVertical } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";

import img1 from "../../assets/Cat_Image/download.jpg"
import ButtonAddToCart from '../Common/ButtonAddToCart';
import { useUser } from '../../Context/UserProvider';


import "./style.css"
import { useWishlist } from '../../Context/Wishlist/WishlistProvider';
import { FaHeart, FaRegHeart } from 'react-icons/fa';




const Product = ({ id, img, title, price, description, max, prefix, onEdit, onDelete }) => {

    const { token } = useUser();

    const { cart } = UseCart();

    const [menuOpen, setMenuOpen] = useState(false);

    const [isDebouncing, setIsDebouncing] = useState(false);
    const [wishlistLoading, setWishlistLoading] = useState(false);

    const existingItem = cart.items.find(item => item.productId === id);
    const QuantityinCart = existingItem ? existingItem.quantity : 0;

    const AvailableStock = max - QuantityinCart;

    const isOutOfStock = QuantityinCart >= max;



    const { user } = useUser();
    const userRoles = user?.userRoles || [];
    const isAdmin = userRoles.includes("Admin");





    const { wishlistitems, AddToWishlist, RemoveFromWishlist } = useWishlist();

    const isInWishlist = wishlistitems.some((item) => item.productId === id);

    const handleWishlistToggle = async () => {
        if (isDebouncing || wishlistLoading) return;
        setIsDebouncing(true);
        setWishlistLoading(true);
        try {
            if (isInWishlist) {
                await RemoveFromWishlist(id);
            } else {
                await AddToWishlist(id);
            }
        } finally {
            setWishlistLoading(false);
        }
    };



    // Depounce Time
    useEffect(() => {
        if (!isDebouncing) { return; }

        const debounce = setTimeout(() => { setIsDebouncing(false); }, 300);

        return () => clearTimeout(debounce);
    }, [isDebouncing]);


    const handleDelete = () => {
        onDelete(id)
        setMenuOpen(false)
    }


    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <div className='d-flex justify-content-center align-items-center w-100 mb-2 position-relative overflow-hidden p-2 shadow bg-light pro'>

            {!isAdmin && token && (
                <div
                    className="position-absolute bg-light p-1 shadow rounded-3 heart"
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

            {isAdmin && (
                <div
                    className='dots'
                    // style={{ right: "0px", top: "5px", zIndex: "10px", cursor: "pointer" }}
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    <div className="icon-wrapper">
                        <span className={`icon ${!menuOpen ? "show" : "hide"}`}>
                            <SlOptionsVertical size={20} />
                        </span>
                        <span className={`icon ${menuOpen ? "show" : "hide"}`}>
                            <IoMdClose size={25} />
                        </span>
                    </div>


                </div>
            )}


            {/* Admin role */}

            {isAdmin &&
                menuOpen && (
                    <div
                        className="position-absolute bg-white shadow rounded p-1 w-50 "
                        style={{ right: "30px", top: "5px", zIndex: 999 }}
                    >
                        <button
                            className=" btn btn-outline-info fw-bold w-100 text-start "
                            onClick={() => {
                                onEdit();
                                setMenuOpen(false);
                            }}
                        >
                            Edit
                        </button>

                        <button
                            className=" btn btn-outline-danger fw-bold w-100 text-start mt-2 border-top pt-2"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </div>
                )}

            <div className='d-flex flex-column justify-content-between gap-2 align-items-start px-lg-3 py-2  rounded rounded-3 w-100 '>
                <Link to={`/categories/products/${prefix}/${id}`} className="text-decoration-none text-dark w-100 text-center product ">
                    {img ?
                        (
                            <img
                                src={`data:image/png;base64,${img}`}
                                width={150} height={150} className='m-auto shadow mb-2 rounded rounded-3 '
                                alt={title}
                            />
                        )
                        : (
                            // Default Image
                            <img
                                src={img1}
                                width={150} height={160} className='m-auto shadow p-2 rounded rounded-3 '
                                alt="No Iamge"
                            />
                        )
                    }
                    <div className='px-4 my-1 div'>
                        <h5 className=" mt-2 h5" title={title}>{title.length > 15 ? title.slice(0, 15) + "..." : title}</h5>
                        <h6 className='mb-2 h6'> {screenWidth < 400 ? price : price.toFixed(2)} EGP</h6>
                        {AvailableStock > 0 ? (<p><strong>Max:</strong> {AvailableStock} </p>) : <p className='badge text-bg-danger p-2  '> Sold Out </p>}
                    </div>
                </Link>

                <div className='m-auto'>
                    <ButtonAddToCart
                        productId={id}
                        title={title}
                        price={price}
                        max={max}
                        img={img}
                        wishlistLoading={wishlistLoading}
                        handleWishlistToggle={handleWishlistToggle}
                        isInWishlist={isInWishlist}
                        isAdmin={isAdmin}
                    />
                </div>

            </div>

        </div>
    )
}


export default Product