import { useParams } from "react-router-dom";
import Product from "../Components/Products/Product";
import { useWishlist } from "../Context/Wishlist/WishlistProvider";
import { Col, Row, Spinner } from "react-bootstrap";

import EmptyCard from "../assets/LotiFiles/Empty_Cart.json"
import Lottie from "lottie-react";

import ErrorsMessage from "../Components/Common/ErrorsMessage";
import LoadingSpinner from "../Components/Common/LoadingSpinner";

const Wishlists = () => {
    const { wishlistitems, loading, error, setWishlistCount } = useWishlist();


    const { prefix } = useParams();

    if (loading) { return <LoadingSpinner message="Loading Wishlist..." size={"lg"} />; }

    if (error) { return <ErrorsMessage message={error} />; }

    if (wishlistitems.length === 0) {
        return (
            <>
                <div className='m-auto w-100' style={{ maxWidth: "600px" }} >
                    <Lottie animationData={EmptyCard} loop={true} autoplay={true} />
                </div>
                <h3 className="text-center mt-3 fw-semibold"> Your wishlist is empty ):</h3>
            </>
        )
    }


    return (
        <div className="container mt-4">
            <h1 className="text-black mb-4">Wishlist</h1>
            <Row>
                {wishlistitems.map((item) => (
                    <Col
                        key={item.productId}
                        lg={3}
                        md={4}
                        sm={6}
                        xs={6}
                        className="my-2"
                    >
                        <Product
                            prefix={prefix}
                            id={item.productId}
                            title={item.title}
                            description={item.description}
                            img={item.image}
                            price={item.price}
                            max={item.stockQuantity}
                            cat_prefix={item.categoryName}
                            onEdit={() => handleEdit(item)}
                            onDelete={() => RemoveProduct(item.productId)}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Wishlists;
