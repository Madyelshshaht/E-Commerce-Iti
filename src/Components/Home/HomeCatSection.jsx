import React from "react";
import category1 from "../../assets/Cat_Image/download.jpg";
import category2 from "../../assets/Cat_Image/girl.jpg";
import category3 from "../../assets/Cat_Image/bag.jpeg";





import { Link } from "react-router-dom";
import "./style.css"

const HomeCatSection = () => {
    return (
        <>
            <section className="categories-section container py-5 mt-5">
                <h2 className="text-center fw-bold mb-5 ">Shop by Categories</h2>
                <div className="row g-4 text-center  ">

                    <div className="col-lg-4 col-md-6 ">

                        <div className="category-card position-relative overflow-hidden rounded shadow ">
                            <img
                                src={category1}
                                alt={`Category`}
                                className="img-fluid "
                            />
                            <div className="category-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column gap-4 justify-content-center align-items-center">
                                <h1 className="text-white">Explore Mens Products</h1>
                                <Link
                                    to={`/categories/products/men`}
                                    className="btn btn-light  rounded rounded-2 py-2 px-4"
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-4 col-md-6 ">
                        <div className="category-card position-relative overflow-hidden rounded shadow">
                            <img
                                src={category2}
                                alt={`Category`}
                                className="img-fluid "
                                style={{ objectFit: "cover" }}
                            />
                            <div className="category-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column gap-4 justify-content-center align-items-center">
                                <h1 className="text-white">Explore Womens Products</h1>
                                <Link
                                    to={`/categories/products/women`}
                                    className="btn btn-light  rounded rounded-2 py-2 px-4"
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 ">
                        <div className="category-card position-relative overflow-hidden rounded shadow">
                            <img
                                src={category3}
                                alt={`Category`}
                                className="img-fluid  "
                                style={{ objectFit: "cover" }}
                            />
                            <div className="category-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column gap-4 justify-content-center align-items-center">
                                <h1 className="text-white">Explore Accessories Products</h1>
                                <Link
                                    to={`/categories/products/bags`}
                                    className="btn btn-light  rounded rounded-2 py-2 px-4"
                                >
                                    Explore
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeCatSection;
