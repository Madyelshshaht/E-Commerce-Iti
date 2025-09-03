
import { useParams } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import Product from './Product';
import { useProduct } from '../../Context/ProductProvider';
import { UseCart } from '../../Context/CartProvider';

const Products = () => {
    const { prefix } = useParams();

    const { product } = useProduct();

    const { addToCart } = UseCart();

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
                                        id={item.id}
                                        title={item.title}
                                        img={item.img}
                                        price={item.price}
                                        max={item.max}
                                        cat_prefix={item.cat_prefix}
                                        onAdd={() => addToCart(item)}
                                    />
                                </Col>
                            ))
                            : <div>No products found</div>
                    }
                </Row>
            </div>
        </>
    )
}

export default Products