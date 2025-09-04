import React from "react";
import {  useParams } from "react-router-dom";
import { useProduct } from "../../Context/ProductProvider";

const ProductDetails = () => {
    const { prefix, id } = useParams();

    const {product} = useProduct();

    console.log(product)

    return (
        <div>
            <h2>Product Details</h2>
            <p><strong>Category:</strong> {prefix}</p>
            <p><strong>Product ID:</strong> {id}</p>

        </div>
    );
};

export default ProductDetails;
