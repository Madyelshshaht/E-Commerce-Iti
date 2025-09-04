import React, { useEffect, useState } from 'react'
import { UseCart } from '../../Context/CartProvider';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Product = ({ id, img, title, price, max , prefix }) => {

    const { cart, addToCart } = UseCart();


    const [isDebouncing, setIsDebouncing] = useState(false);

    const existingItem = cart.find(item => item.id === id);
    const QuantityinCart = existingItem ? existingItem.quantity : 0;

    const AvailableStock = max - QuantityinCart;

    const isOutOfStock = QuantityinCart >= max;

    const isDisabled = isOutOfStock || isDebouncing;


    // Depounce Time
    useEffect(() => {
        if (!isDebouncing) {
            return;
        }

        const debounce = setTimeout(() => {
            setIsDebouncing(false);
        }, 300);

        return () => clearTimeout(debounce);
    }, [isDebouncing]);


    const handelAddToCart = () => {
        if (isDisabled) return;

        addToCart({ id, img, title, price, max });
        setIsDebouncing(true);
    }


    return (
        <div className='d-flex justify-content-center align-items-center w-100 mb-2'>

            <div className='d-flex flex-column justify-content-center align-items-start px-3 py-3  rounded rounded-3 w-100'>
                <Link to={`/categories/products/${prefix}/${id}`} className="text-decoration-none text-dark w-100 text-center">
                    <img src={img} alt={title} width={150} height={160}  className='m-auto shadow p-2 rounded rounded-3 ' />
                    <div className='px-4 my-1'>
                        <h5 className=" mt-2" title={title}>{title.length > 15 ? title.slice(0, 15) + "..." : title}</h5>
                        <h6 className='mb-2'> {price.toFixed(2)} EGP</h6>
                        {AvailableStock > 0 ? (<p><strong>Available:</strong> {AvailableStock} </p>) : <p className='badge text-bg-danger p-2  '> Sold Out </p>}
                    </div>
                </Link>
                <button
                    className={`btn  text-white px-4 m-auto ${isDisabled ? 'btn-secondary cursor-not-allowed opacity-75' : 'btn-info'}`}
                    onClick={handelAddToCart}
                    disabled={isDisabled}
                >
                    {isOutOfStock
                        ? "Out of Stock"
                        : isDebouncing
                            ? <>
                                <Spinner animation="border" size="sm" /> Loading...
                            </>
                            : "Add to Cart"}
                </button>
            </div>

        </div>
    )
}


export default Product