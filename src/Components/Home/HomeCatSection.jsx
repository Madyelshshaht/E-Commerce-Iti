import React from "react";
import category1 from "../../assets/Cat_Image/download.jpg";
import category2 from "../../assets/Cat_Image/girl.jpg";
import category3 from "../../assets/Cat_Image/bag.jpeg";
import aboutUsImage from "../../assets/LotiFiles/pic.webp";
import { Link } from "react-router-dom";
import "./style.css";
import { FaTshirt } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri"

const HomeCatSection = () => {
  return (
    <>
      {/* Categories Section */}
      <section className="categories-section container py-5 mt-5">
        <h2 className="text-center fw-bold mb-5 ">Shop by Categories</h2>

        <div className="row g-4 text-center my-5 pb-5">
          {/* Category 1 */}
          <div className="col-lg-4 col-md-6 ">
            <div className="category-card position-relative overflow-hidden rounded shadow ">
              <img src={category1} alt="Category" className="img-fluid " />
              <div className="category-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column gap-4 justify-content-center align-items-center">
                <h1 className="text-white">Explore Mens Products</h1>
                <Link
                  to={`/categories/products/men`}
                  className="btn btn-info text-white fw-semibold rounded rounded-2 py-2 px-4"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>

          {/* Category 2 */}
          <div className="col-lg-4 col-md-6 ">
            <div className="category-card position-relative overflow-hidden rounded shadow">
              <img
                src={category2}
                alt="Category"
                className="img-fluid "
                style={{ objectFit: "cover" }}
              />
              <div className="category-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column gap-4 justify-content-center align-items-center">
                <h1 className="text-white">Explore Womens Products</h1>
                <Link
                  to={`/categories/products/women`}
                  className="btn btn-info text-white fw-semibold rounded rounded-2 py-2 px-4"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>

          {/* Category 3 */}
          <div className="col-lg-4 col-md-6 ">
            <div className="category-card position-relative overflow-hidden rounded shadow">
              <img
                src={category3}
                alt="Category"
                className="img-fluid"
                style={{ objectFit: "cover" }}
              />
              <div className="category-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column gap-4 justify-content-center align-items-center">
                <h1 className="text-white">Explore Accessories Products</h1>
                <Link
                  to={`/categories/products/bags`}
                  className="btn btn-info text-white fw-semibold rounded rounded-2 py-2 px-4"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <section className="features-section bg-light py-5 my-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-4">Why Choose Us?</h2>
            <div className="row text-center pt-4 g-4">

              <div className="col-lg-4 col-md-6 mb-4 ">
                <span>
                  <FaTshirt size={100} color='#0dcaf0' />
                </span>
                <h5 className="fw-bold mt-3">Trendy Designs</h5>
                <p className="text-secondary">
                  Inspired by the latest fashion trends to keep you stylish every season.
                </p>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 ">
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
        </section> */}

        <section className="features-section py-5 my-5 position-relative overflow-hidden">
          <div className="container">

            {/* Heading */}
            <div className="text-center mb-5">
              <h2 className="text-info fw-semibold text-uppercase ">
                Why Choose Us
              </h2>

              <h4 className="fw-bold  mt-2">
                Fashion That Matches Your Lifestyle
              </h4>

              <p className="text-secondary mx-auto" style={{ maxWidth: "650px" }}>
                We combine modern fashion trends, premium quality materials, and
                exceptional customer service to deliver the best shopping experience.
              </p>
            </div>

            {/* Cards */}
            <div className="row g-4">

              {/* Card 1 */}
              <div className="col-lg-4 col-md-6">
                <div className="feature-card text-center h-100 p-5">
                  <div className="icon-wrapper mx-auto mb-4">
                    <FaTshirt size={55} />
                  </div>

                  <h4 className="fw-bold mb-3">Trendy Designs</h4>

                  <p className="text-secondary mb-0">
                    Inspired by the latest fashion trends to keep your style fresh and
                    modern every season.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-lg-4 col-md-6">
                <div className="feature-card text-center h-100 p-5">
                  <div className="icon-wrapper mx-auto mb-4">
                    <MdOutlineWorkspacePremium size={55} />
                  </div>
                  <h4 className="fw-bold mb-3">Premium Quality</h4>
                  <p className="text-secondary mb-0">
                    Crafted with high-quality fabrics and materials for long-lasting
                    comfort and durability.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col-lg-4 col-md-6 mx-md-auto">
                <div className="feature-card text-center h-100 p-5">
                  <div className="icon-wrapper mx-auto mb-4">
                    <RiCustomerService2Fill size={55} />
                  </div>

                  <h4 className="fw-bold mb-3">Excellent Service</h4>

                  <p className="text-secondary mb-0">
                    Our dedicated support team is always ready to assist you with fast
                    and reliable service.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="about-us container py-5 my-5">
          <div className="row align-items-center">
            {/* Left Content (Text) */}
            <div className="col-lg-6 order-2 order-lg-1 mt-4 mt-lg-0">
              <h2 className="fw-bold mb-4 text-start">About Us</h2>
              <p className="text-muted fs-5 lh-lg mb-4 text-start">
                We are an e-commerce platform dedicated to bringing you the best
                products with premium quality and affordable prices. Our mission
                is to provide a seamless, fast, and enjoyable shopping
                experience for our customers. From men's and women's fashion to
                accessories, we’ve got everything you need.
              </p>

              <div className="text-start">
                <button className="btn btn-info text-white fw-semibold mb-4">Read More</button>
              </div>

              {/* Social Icons */}
              <div className="d-flex gap-3 text-start">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark fs-4"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark fs-4"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-dark fs-4"
                >
                  <i className="bi bi-twitter"></i>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
              <img
                src={aboutUsImage}
                alt="About Us"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </section>

        {/* Contact Us */}
        {/* <section className="contact-section py-5 my-5">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold contact-title">CONTACT US</h2>
              <p className="contact-subtitle">
                We’d love to hear from you. Whether you have a question about
                our products, need assistance, or just want to share feedback,
                we’re here to help.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-8 mb-4">
                <form className="contact-form">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="YOUR NAME"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="YOUR MAIL"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="YOUR MESSAGE"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-info text-white fw-semibold w-100 py-2 mt-4">
                    SEND MESSAGE
                  </button>
                </form>
              </div>

              <div className="col-lg-4 mt-md-0 mt-4 ">
                <div className="mb-4 card py-2 px-4 shadow  ">
                  <h5 className="fw-bold">GET IN TOUCH</h5>
                  <p>+02 0106 55 60 657</p>
                  <p>+02 010 55 29 55 31</p>
                </div>
                <div className="card py-2 px-4 shadow">
                  <h5 className="fw-bold">WHERE WE ARE</h5>
                  <p>Awesome Address 17</p>
                  <p>Mansoura, Kanat Elwsis</p>
                  <p>123-4567-890</p>
                  <p>EGY</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="contact-section py-5 my-5 position-relative overflow-hidden">
          <div className="container">

            {/* Heading */}
            <div className="text-center mb-5">
              <h2 className="text-info fw-semibold text-uppercase ">
                Contact Us
              </h2>

              <h4 className="fw-bold  mt-2">
                Let’s Start a Conversation
              </h4>

              <p className="text-secondary mx-auto contact-subtitle">
                We’d love to hear from you. Whether you have questions about our
                products, need support, or want to share your feedback — our team is
                always ready to help.
              </p>
            </div>

            <div className="row g-4 align-items-stretch">

              {/* Form */}
              <div className="col-lg-8">
                <div className="contact-card h-100 p-4 p-lg-5">

                  <form className="contact-form">

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="form-label fw-semibold">
                          Full Name
                        </label>

                        <input
                          type="text"
                          className="form-control custom-input"
                          placeholder="Enter your name"
                        />
                      </div>

                      <div className="col-md-6 mb-4">
                        <label className="form-label fw-semibold">
                          Email Address
                        </label>

                        <input
                          type="email"
                          className="form-control custom-input"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-semibold">
                        Your Message
                      </label>

                      <textarea
                        className="form-control custom-input"
                        rows="6"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn contact-btn text-white fw-semibold px-5 py-3"
                    >
                      SEND MESSAGE
                    </button>

                  </form>
                </div>
              </div>

              {/* Info Cards */}
              <div className="col-lg-4">

                <div className="d-flex flex-column gap-4 h-100">

                  {/* Contact Info */}
                  <div className="info-card p-4">
                    <h5 className="fw-bold mb-4">
                      GET IN TOUCH
                    </h5>

                    <div className="mb-3">
                      <span className="info-label">Phone</span>
                      <p className="mb-1 text-secondary">
                        0106 55 60 657
                      </p>
                      <p className="mb-0 text-secondary">
                        010 55 29 55 31
                      </p>
                    </div>

                    <div>
                      <span className="info-label">Email</span>
                      <p className="mb-0 text-secondary">
                        workeverything9@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="info-card p-4 flex-grow-1">
                    <h5 className="fw-bold mb-4">
                      WHERE WE ARE
                    </h5>

                    <p className="text-secondary mb-2">
                      Awesome Address 17
                    </p>

                    <p className="text-secondary mb-2">
                      Mansoura, Kanat Elwsis
                    </p>

                    <p className="text-secondary mb-2">
                      123-4567-890
                    </p>

                    <p className="text-secondary mb-0">
                      Egypt
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

      </section>
    </>
  );
};

export default HomeCatSection;
