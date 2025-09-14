
import { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";

import FormCategory from "../Components/Categories/FormCategory";
import Category from "../Components/Categories/Category";

import CategoriesSkeleton from "../Components/Feedback/Skeleton/CategoriesSkeleton";
import useCategories from "../Hooks/useCategories/useCategories";
import SearchCategory from "../Components/Categories/SearchCategory";


import Lottie from "lottie-react";
import NoData from "../assets/LotiFiles/No_Data.json";
import { useUser } from "../Context/UserProvider";


const Categories = () => {
    const {
        categories,
        loading,
        error,
        RemoveCategory,
        AddCategory,
        EditCategory,
    } = useCategories();

    const [toggle, setToggle] = useState(false);

    const [initialData, setInitialData] = useState(null);

    const [searchData, setSearchData] = useState(null);





    const handleAdd = () => {
        setInitialData(null);
        setToggle(!toggle);
    };


    const handleEdit = (cat) => {
        setInitialData(cat);
        setToggle(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
    };

    const displayedProducts = searchData !== null ? searchData : categories;


    if (loading) {
        return <CategoriesSkeleton />;
    }

    if (error) return <>
        {userRole === "admin" && (
            <div className="d-flex justify-content-between align-items-center mb-2">
                <h1 className="mb-5">Categories</h1>

                {/* [Admin] Buuton Add New */}
                <button className="btn btn-success mb-4" onClick={handleAdd}>
                    {!toggle ? " Add Category " : "Close"}
                </button>
            </div>
        )}

        <p>Error: {error}</p>;
    </>


    const { user } = useUser();
    const userRoles = user?.userRoles || [];
    const isAdmin = userRoles.includes("Admin");

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-5 overflow-hidden ">
                <h1>Categories</h1>

                {isAdmin && (
                    <button className="btn btn-success " onClick={handleAdd}>
                        {!toggle ? " Add Category " : "Close"}
                    </button>
                )}

            </div>

            {isAdmin && (
                <FormCategory
                    toggle={toggle}
                    setToggle={setToggle}
                    initialData={initialData}
                    setInitialData={setInitialData}
                    AddCategory={AddCategory}
                    EditCategory={EditCategory}
                />
            )}

            <Row>
                {/* Search */}
                <div>
                    <SearchCategory categories={categories} setSearchData={setSearchData} />
                </div>

                {displayedProducts.length > 0 ? (
                    displayedProducts.map((cat) => (
                        <Col
                            lg={3}
                            md={4}
                            xs={6}
                            className="d-flex justify-content-center mb-5 mt-3 "
                            key={cat.categoryId}
                        >
                            <Category
                                id={cat.categoryId}
                                title={cat.title}
                                img={cat.imageData}
                                prefix={cat.prefix}
                                onEdit={() => handleEdit(cat)}
                                onDelete={() => RemoveCategory(cat.categoryId)}
                            />
                        </Col>
                    ))
                ) : (
                    <>
                        <div className="m-auto w-100" style={{ maxWidth: "600px" }}>
                            <Lottie animationData={NoData} loop={true} autoplay={true} />
                        </div>
                        <h3 className="text-center mt-2 fw-bold">No Categories Found</h3>
                    </>
                )}

            </Row>
        </>
    );
};

export default Categories;
