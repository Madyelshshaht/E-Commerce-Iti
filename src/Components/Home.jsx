
import React from 'react';


import './style.css';


const Home = () => {
    return (
        <div className='container-fluid bg-light min-vh-100 py-5'>
            {/* Hero Section */}
            <div className="hero-section container d-flex align-items-center py-5">
                <div className="row w-100 align-items-center">
                    {/* Text Section */}
                    <div className="col-md-6 text-start">
                        <h1 className="fw-bold mb-3 display-4 text-dark">
                            Discover Stylish Clothing!
                        </h1>
                        <p className="lead mb-4 text-secondary">
                            Explore our latest collection of trendy and comfortable clothes.
                            We bring you fashion that suits your style and lifestyle.
                        </p>
                        <a href="#" className="btn btn-primary btn-lg px-4 rounded-pill me-3 shadow">
                            TO SHOP
                        </a>
                        <a href="#" className="btn btn-outline-dark btn-lg px-4 rounded-pill shadow">
                            READ MORE
                        </a>
                    </div>

                    {/* Image Section */}
                    <div className="col-md-6 text-center">
                        {/* <img
                            src={img2}
                            alt="Hero Banner"
                            className="img-fluid rounded shadow hero-img"
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        /> */}
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="about-section container py-5 mt-5">
                <h2 className="fw-bold text-center mb-4">About Our Project</h2>
                <p className="text-center text-secondary mb-5">
                    Our brand is dedicated to providing high-quality clothing that combines style and comfort.
                    From casual wear to formal attire, we ensure each piece meets the highest standards.
                </p>

                <div className="row text-center">
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">Trendy Designs</h5>
                        <p className="text-secondary">
                            Our designs are inspired by the latest fashion trends to keep you stylish every season.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">High Quality</h5>
                        <p className="text-secondary">
                            We use premium fabrics and materials to ensure durability and comfort.
                        </p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">Excellent Service</h5>
                        <p className="text-secondary">
                            Our customer support is always ready to help with your orders and inquiries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
