import React from 'react'
import UseOrders from '../../Hooks/Orders/UseOrders';
import { Modal } from 'react-bootstrap';

const OrderDetailsModel = ({ showModal, setShowModal, orderDetails, selectedOrderId }) => {

    const Total = orderDetails?.reduce((acc, item) => {
        return acc + (item.productPrice * item.productQuantityInOrderItems);
    }, 0)

    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" >
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {orderDetails ? (
                        <div>
                            <h5>Order #{selectedOrderId}</h5>
                            <div>
                                {orderDetails?.map((o, idx) => (
                                    <div key={idx}>
                                        <div className='my-3 d-flex align-items-center gap-4'>
                                            <img src={`data:image/png;base64,${o.productImage}`} alt="product" width={120} height={130} />
                                            <div>
                                                <h4>Title: {o.productTitle}</h4>
                                                <h5>Price: {o.productPrice.toFixed(2)} EGP</h5>
                                                <h5>Quantity: {o.productQuantityInOrderItems}</h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            <h4 className="fw-bold">
                                Total: {Total?.toFixed(2)} EGP
                            </h4>
                        </div>
                    ) : (
                        <p>No details available.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                        Close
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default OrderDetailsModel;