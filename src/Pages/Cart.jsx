
import { UseCart } from '../Context/CartProvider';
import CartItem from '../Components/Cart/CartItem';

import Lottie from "lottie-react";
import EmptyCard from "../assets/LotiFiles/Empty_Cart.json"

const Cart = () => {
    const { cart, getTotalPrice } = UseCart();

    if (cart.length === 0) {
        return (
            <>
                <div className='m-auto' style={{width: "600px" }} >
                    <Lottie animationData={EmptyCard} loop={true} autoplay={true} />
                </div>
                <h3 className="text-center mt-3 fw-semibold">Your cart is empty ):</h3>
            </>
        )
    }

    return (
        <div className="container mt-4">
            {
                cart.map((item) => (
                    <CartItem
                        key={item.id}
                        img={item.img}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        quantity={item.quantity}
                        max={item.max}
                    />
                ))}

            <div className='d-flex justify-content-between align-items-center mt-5'>
                <h5>Total Price: {(getTotalPrice()).toFixed(2)} EGP</h5>
                <button className='btn btn-primary'>Place Order</button>
            </div>
        </div>
    )
}


export default Cart