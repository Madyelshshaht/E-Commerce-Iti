import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../Context/ProductProvider";
import ButtonAddToCart from "../Common/ButtonAddToCart";

const ProductDetails = () => {
    const { prefix, id } = useParams();

    const { product } = useProduct();

    const specificProduct = product.find(p => p.productId === parseInt(id))

    

    return (
        <div>
            <h2>Product Details</h2>

            {specificProduct ? (
                <div className="card mt-3 p-4 shadow-sm">
                    <div className="row align-items-center">

                        <div className="col-md-6 text-center mb-3 mb-md-0 " >
                            <img
                                src={`data:image/png;base64,${specificProduct.image}`}
                                alt={specificProduct.title}
                                style={{ objectFit: "contain", width: "100%", maxWidth: "400px", height: "430px" }}
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>


                        <div className="col-md-6 d-flex flex-column gap-4 justify-content-center shadow py-4 px-4 my-sm-4 ">
                            {/* <h5><span className="fw-bold p-2">Product ID:</span> <span className="badge bg-info"> {id} </span></h5> */}
                            <h3>
                                <span className="fw-bold ">Title:</span> <span className="badge bg-info">{specificProduct.title}</span>
                            </h3>
                            <prefix>
                                <span className="fw-bold fs-4">Description:</span> <br /> <span className="fw-semibold text-muted ">{specificProduct.description}</span>
                            </prefix>
                            <h4>
                                <span className="fw-bold">Available:</span> <span className="badge bg-info"> {specificProduct.stockQuantity ?? "N/A"}  Stock </span>
                            </h4>
                            <h4 className="my-2">
                                <span className="fw-bold">Price:</span> <span className="badge bg-info"> {specificProduct.price ? specificProduct.price.toFixed(2) : "0"} EGP </span>
                            </h4>
                            <h5><span className="fw-bold">Category:</span> <span className="badge bg-info"> {prefix} </span> </h5>
                        </div>

                        <div className='d-flex justify-content-center pt-3'>
                            <ButtonAddToCart
                                productId={specificProduct.productId}
                                title={specificProduct.title}
                                price={specificProduct.price}
                                max={specificProduct.stockQuantity}
                                img={specificProduct.image}
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-danger">Product not found.</p>
            )}

        </div>
    );
};

export default ProductDetails;
