
import { Link } from 'react-router-dom';

import b1 from "../assets/banner/b1.jpg";
import b2 from "../assets/banner/b4.jpg";
import Lottie from "lottie-react";
import shopping from "../assets/LotiFiles/Shopping.json";

import HomeCatSection from '../Components/Home/HomeCatSection';

import "../Components/Home/style.css"

import { FaTshirt } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";


const Home = () => {
    return (
        <div className='home-page container-fluid p-0 '>

            {/* Hero Section */}
            <section className="hero text-white row px-3 ">

                <div className="col-md-6">
                    <div className="m-auto">
                        <Lottie animationData={shopping} loop={true} autoplay={true} />
                    </div>
                </div>


                <div className="col-md-6 text-center d-flex justify-content-center align-items-center flex-column text-black mt-md-0 mt-3" >
                    <h1 className="title fw-bold mb-3">Discover Stylish Clothing!</h1>
                    <p className="desc fw-medium lead mb-4">Trendy, Comfortable & High-Quality Apparel for Every Occasion</p>

                    <div className='d-flex flex-md-row flex-column align-items-center'>
                        <Link to="/categories" className="btn btn-info text-white  rounded-3 shadow-sm px-3 py-2">
                            Shop Now
                        </Link>
                    </div>

                </div>

            </section>

            {/* Categories Section */}
            <HomeCatSection />

            {/* Features Section */}
            <section className="features-section bg-light py-5 mt-5">
                <div className="container">
                    <h2 className="text-center fw-bold mb-4">Why Choose Us?</h2>
                    <div className="row text-center  pt-4">

                        <div className="col-lg-4 col-md-6 mb-4">
                            <span>
                                <FaTshirt size={100} color='#0dcaf0' />
                            </span>
                            <h5 className="fw-bold mt-3">Trendy Designs</h5>
                            <p className="text-secondary">
                                Inspired by the latest fashion trends to keep you stylish every season.
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <span>
                                <MdOutlineWorkspacePremium size={100} color='#0dcaf0' />
                            </span>
                            <h5 className="fw-bold mt-3">Premium Quality</h5>
                            <p className="text-secondary">
                                We use premium fabrics and materials for durability and comfort.
                            </p>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4">
                            <span>
                                <RiCustomerService2Fill size={100} color='#0dcaf0' />
                            </span>
                            <h5 className="fw-bold mt-3">Excellent Service</h5>
                            <p className="text-secondary">
                                Our customer support is ready to help you with your orders anytime.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* About / Testimonials Section */}
            <section className="about-section container py-5">
                <h2 className="text-center fw-bold mb-4">About Our Brand</h2>
                <p className="text-center text-secondary mb-5">
                    We are dedicated to providing stylish, high-quality clothing that fits your lifestyle.
                    From casual wear to formal attire, each piece is crafted to perfection.
                </p>
            </section>

        </div>
    );
};

export default Home;
