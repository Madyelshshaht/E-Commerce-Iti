import React, { useState } from "react";
import UseOrders from "../Hooks/Orders/UseOrders";
import Swal from "sweetalert2";
import { Modal, Spinner } from "react-bootstrap";
import NoData from "../assets/LotiFiles/No_Data.json";
import Lottie from "lottie-react";
import OrderDetailsModel from "../Components/Orders/OrderDetailsModel";

const Orders = () => {

    const {
        orders,
        loading,
        error,
        orderDetails,
        ClearOrders,
        RemoveOrder,
        OrderDetails,
    } = UseOrders();

    console.log("Orders:", orders);

    const [showModal, setShowModal] = useState(false);
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    const hadnleOrderDetails = async (orderId) => {
        const details = await OrderDetails(orderId);
        if (details) {
            setSelectedOrderId(orderId);
            setShowModal(true);
        }
    };

    const handleClearOrders = async () => {
        Swal.fire({
            title: "Are you sure?",
            text: "This will delete all your orders and cannot be undone!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete them!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const success = await ClearOrders();
                if (success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "All your orders have been cleared.",
                        icon: "success",
                    });
                } else {
                    Swal.fire({
                        title: "Error",
                        text: "Failed to clear orders. Please try again.",
                        icon: "error",
                    });
                }
            }
        });
    };

    if (loading)
        return (
            <div className="text-center mt-5">
                <Spinner variant="info" className="mt-5" />
            </div>
        );

    const TotalPrice = orders.reduce(
        (acc, item) => acc + Number(item.totalAmoutForeachOrder || 0),
        0
    );

    return (
        <>
            <h1>Orders Page</h1>
            <div>
                <h2 className="mt-5">My Orders</h2>
                {orders.length === 0 ? (
                    <>
                        <div className="m-auto w-100" style={{ maxWidth: "600px" }} >
                            <Lottie animationData={NoData} loop={true} autoplay={true} />
                        </div>
                        <h3 className="text-center mt-2 fw-bold">No Orders Found</h3>
                    </>
                ) : (
                    <div>
                        {orders.map((order, idx) => (
                            <div key={order.orderId} className="my-3">
                                <div className="bg-light p-3 d-flex align-items-center gap-5">
                                    <span>{idx + 1} - Order</span>
                                    <div className="d-flex align-items-center gap-4">
                                        <button
                                            className="btn btn-success"
                                            onClick={() => hadnleOrderDetails(order.orderId)}
                                        >
                                            Order Details
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => RemoveOrder(order.orderId)}
                                        >
                                            Remove Order
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <OrderDetailsModel
                            showModal={showModal}
                            setShowModal={setShowModal}
                            orderDetails={orderDetails}
                            selectedOrderId={selectedOrderId}
                        />

                        <button
                            className="btn btn-danger mt-3 px-3 py-2"
                            onClick={handleClearOrders}
                        >
                            Clear Orders
                        </button>

                        <div className="mt-5">
                            <h3>
                                <span className="fst-italic">Total Price</span> : {TotalPrice} EGP
                            </h3>
                        </div>


                    </div>
                )}
            </div>
        </>
    )
};

export default Orders;
