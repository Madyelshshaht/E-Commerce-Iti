
import { useParams } from 'react-router-dom';
import { useProduct } from '../Context/ProductProvider';
import Product from '../Components/Products/Product';
import { Col, Row } from 'react-bootstrap';

import Lottie from "lottie-react";
import NoData from "../assets/LotiFiles/No_Data.json"
import ProductSkeleton from '../Components/Feedback/Skeleton/ProductSkeleton';

import FormProduct from '../Components/Products/FormProduct';
import { useState } from 'react';


const Products = () => {
    const { prefix } = useParams();

    const { product, loading } = useProduct();

    const [toggle, setToggle] = useState(false);

    if (loading) {
        return (<ProductSkeleton />)
    }

    return (
        <>
            <div className='d-flex justify-content-between align-items-center mb-2'>
                <h1>Products {prefix}</h1>

                <button className='btn btn-success mb-4' onClick={() => setToggle(!toggle)}>
                    {!toggle ? " Add Product " : "Close"}
                </button>
            </div>

            <FormProduct toggle={toggle} setToggle={setToggle} />




            <div>
                <Row className='p-2 '>
                    {
                        product.length > 0
                            ? product.map(item => (
                                <Col
                                    key={item.id}
                                    lg={3}
                                    md={4}
                                    sm={6}
                                    xs={12}
                                    className='my-2'
                                >
                                    <Product
                                        prefix={prefix}
                                        id={item.id}
                                        title={item.title}
                                        img={item.img}
                                        price={item.price}
                                        max={item.max}
                                        cat_prefix={item.cat_prefix}
                                    />
                                </Col>
                            ))
                            :
                            (
                                <>
                                    <div className='m-auto' style={{ width: "600px" }} >
                                        <Lottie animationData={NoData} loop={true} autoplay={true} />
                                    </div>
                                    <h3 className='text-center mt-2 fw-bold'>No Products Found</h3>
                                </>
                            )
                    }
                </Row>
            </div>
        </>
    )
}

export default Products