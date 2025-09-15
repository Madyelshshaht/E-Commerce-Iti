import React from 'react'
import { UseCart } from '../../Context/CartProvider';
import { useUser } from '../../Context/UserProvider';

const CartItem = ({ id, title, price, quantity, max, img }) => {
    const { changeQuantity, removeFromCart } = UseCart();

    const { user } = useUser();


    return (
        <>
            <div className=" border-bottom py-2">

                <div className='info d-flex align-items-center justify-content-between'>

                    <div className='d-flex gap-3 align-items-center p-2'>
                        {/* <img src={img} alt={title} style={{ width: "100px" }} /> */}
                        <img src={`data:image/png;base64,${img}`} alt="" style={{ width: "100px" }} />

                        <div className="info-text d-flex flex-column align-items-start justify-content-between ">
                            <div className=''>
                                <h6>{title}</h6>
                                <span>{price ? price.toFixed(2) : 0} EGP</span>
                            </div>
                            <button
                                onClick={() => removeFromCart(id, quantity)}
                                className="btn btn-sm btn-danger mt-4"
                            >
                                Remove
                            </button>
                        </div>
                    </div>

                    {max > 0
                        ? (
                            <div className="select">
                                <select
                                    value={quantity}
                                    // +e.target.value ==> htis is the Value (+) => to Make the vlue number
                                    onChange={(e) => changeQuantity(user?.id, id, +e.target.value)}
                                    className="form-select w-auto mx-2"
                                >

                                    {
                                        Array(max).fill(0).map((_, i) => i + 1).map((num) => (
                                            <option key={num} value={num}>
                                                {num}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        )
                        : <span className='text-danger fw-semibold'> Last Piece </span>
                    }


                </div>



            </div>
        </>
    )
}





export default CartItem