import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../Context/ProductProvider";

const ProductDetails = () => {
    const { prefix, id } = useParams();

    const { product } = useProduct();

    const specificProduct = product.find(p => p.id === parseInt(id))
    console.log("Specific Product:", specificProduct)

    console.log(product)

    return (
        <div>
            <h2>Product Details</h2>

            {specificProduct ? (
                <div className="card mt-3 p-4 shadow-sm">
                    <div className="row align-items-center">

                        <div className="col-md-6 text-center mb-3 mb-md-0">
                            <img
                                src={specificProduct.image || specificProduct.img}
                                alt={specificProduct.title}
                                style={{ objectFit: "cover", width: "100%", maxWidth: "400px" }}
                                className="img-fluid rounded shadow-sm"
                            />
                        </div>


                        <div className="col-md-6 d-flex flex-column gap-4 justify-content-center shadow py-4 px-4 my-sm-4">
                            <h5><span className="fw-bold p-2">Product ID:</span> <span className="badge bg-info"> {id} </span></h5>
                            <h2 className="my-3">
                                <span className="fw-bold ">Title:</span> <span className="badge bg-info">{specificProduct.title}</span>
                            </h2>
                            <h4>
                                <span className="fw-bold">Available:</span> <span className="badge bg-info"> {specificProduct.max ?? "N/A"}  Stock </span>
                            </h4>
                            <h4 className="my-2">
                                <span className="fw-bold">Price:</span> <span className="badge bg-info"> {specificProduct.price ? specificProduct.price.toFixed(2) : "0"} EGP </span>
                            </h4>
                            <h5><span className="fw-bold">Category:</span> <span className="badge bg-info"> {prefix} </span> </h5>
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
