import { useParams } from "react-router-dom";
import { useProduct } from "../Context/ProductProvider";
import Product from "../Components/Products/Product";
import { Col, Row } from "react-bootstrap";

import Lottie from "lottie-react";
import NoData from "../assets/LotiFiles/No_Data.json";
import ProductSkeleton from "../Components/Feedback/Skeleton/ProductSkeleton";

import FormProduct from "../Components/Products/FormProduct";
import { useMemo, useState } from "react";

import SearchProduct from "../Components/Products/SearchProduct"
import { useUser } from "../Context/UserProvider";

const Products = () => {
    const { prefix } = useParams();

    const { product, loading, error, RemoveProduct, AddProduct, UpdateProduct } = useProduct();

    console.log(product)

    console.log(product)

    const [toggle, setToggle] = useState(false);

    const [initialData, setInitialData] = useState(null);

    const [searchData, setSearchData] = useState(null);

    // const handleAdd = () => {
    //     setInitialData(null);
    //     setToggle(!toggle);
    // };

    const handleEdit = (pro) => {
        setInitialData(pro);
        setToggle(true);
    };

    const filteredProducts = useMemo(() => {
        return (product || []).filter((item) =>
            item?.categoryName?.toLowerCase() === prefix?.toLowerCase()
        );
    }, [product, prefix]);

    const displayedProducts = searchData !== null ? searchData : filteredProducts;

    if (loading) {
        return <ProductSkeleton />;
    }

    if (error) {
        return <>
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h1>Products {prefix}</h1>

                {userRole === "admin" && (
                    <button
                        className="btn btn-success mb-4"
                        onClick={() => setToggle(!toggle)}
                    >
                        {!toggle ? " Add Product " : "Close"}
                    </button>
                )}

            </div>
            <h3 className="text-danger text-center mt-5"> No Product Found <br /> {error} </h3>
        </>
    }


    const { user } = useUser();
    const userRoles = user?.userRoles || [];
    const isAdmin = userRoles.includes("Admin");

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-2 overflow-hidden">
                <h1>Products {prefix}</h1>
                {isAdmin && (
                    <button
                        className="btn btn-success "
                        onClick={() => setToggle(!toggle)}
                    >
                        {!toggle ? " Add Product " : "Close"}
                    </button>
                )}
            </div>

            {isAdmin && (
                <FormProduct
                    toggle={toggle}
                    setToggle={setToggle}
                    initialData={initialData}
                    setInitialData={setInitialData}
                    AddProduct={AddProduct}
                    UpdateProduct={UpdateProduct}
                />
            )}

            <div className="overflow-hidden">
                <Row className="p-2 ">

                    <div>
                        <SearchProduct product={filteredProducts} setSearchData={setSearchData} />
                    </div>

                    {displayedProducts.length > 0 ? (
                        displayedProducts.map((item) => (
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
                            <div className="m-auto w-100" style={{ maxWidth: "600px" }}>
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
