import { useParams } from "react-router-dom";
import { useProduct } from "../Context/ProductProvider";
import Product from "../Components/Products/Product";
import { Col, Row } from "react-bootstrap";

import Lottie from "lottie-react";
import NoData from "../assets/LotiFiles/No_Data.json";
import ProductSkeleton from "../Components/Feedback/Skeleton/ProductSkeleton";

import FormProduct from "../Components/Products/FormProduct";
import { useState } from "react";

import SearchProduct from "../Components/Products/SearchProduct"

const Products = () => {
    const { prefix } = useParams();

    const { product, loading, error, RemoveProduct, AddProduct, UpdateProduct } = useProduct();

    const [toggle, setToggle] = useState(false);

    const [initialData, setInitialData] = useState(null);

    const [searchData, setSearchData] = useState([])


    const handleAdd = () => {
        setInitialData(null);
        setToggle(!toggle);
    };

    const handleEdit = (pro) => {
        setInitialData(pro);
        setToggle(true);
    };


    if (loading) {
        return <ProductSkeleton />;
    }
    if (error) {
        return <h5>{error}</h5>
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h1>Products {prefix}</h1>

                <button
                    className="btn btn-success mb-4"
                    onClick={() => setToggle(!toggle)}
                >
                    {!toggle ? " Add Product " : "Close"}
                </button>
            </div>

            <FormProduct
                toggle={toggle}
                setToggle={setToggle}
                initialData={initialData}
                setInitialData={setInitialData}
                AddProduct={AddProduct}
                UpdateProduct={UpdateProduct}
            />

            <div>
                <Row className="p-2 ">

                    <div>
                        <SearchProduct product={product} setSearchData={setSearchData} />
                    </div>

                    {(searchData.length > 0 ? searchData : product).length > 0 ? (
                        (searchData.length > 0 ? searchData : product).map((item) => (
                            <Col
                                key={item.productId}
                                lg={3}
                                md={4}
                                sm={6}
                                xs={12}
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
                        ))
                    ) : (
                        <>
                            <div className="m-auto" style={{ width: "600px" }}>
                                <Lottie animationData={NoData} loop={true} autoplay={true} />
                            </div>
                            <h3 className="text-center mt-2 fw-bold">No Products Found</h3>
                        </>
                    )}
                </Row>
            </div>
        </>
    );
};

export default Products;
