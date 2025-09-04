
import { useParams } from 'react-router-dom';
import { useProduct } from '../Context/ProductProvider';
import Product from '../Components/Products/Product';
import { Col, Row } from 'react-bootstrap';

import Lottie from "lottie-react";
import NoData from "../assets/LotiFiles/No_Data.json"


const Products = () => {
    const { prefix } = useParams();

    const { product } = useProduct();


    return (
        <>
            <h1>Products {prefix}</h1>
            <div>
                <Row className='p-2 '>
                    {
                        product.length > 0
                            ? product.map(item => (
                                <Col
                                    key={item.id}
                                    lg={3}
                                    md={4}
                                    xs={6}
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