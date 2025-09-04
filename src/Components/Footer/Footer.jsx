import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 mt-5">
      <div className="container">
        <div className="row text-center text-md-start">

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">About Us</h5>
            <p className="small">
              Welcome to our Ecommerce !<br />
              We provide the best services for our clients.<br />
              Contact us for any inquiries.
            </p>
          </div>


          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Contact</h5>
            <p className="small mb-1">Icon mahamedelshahat55@gmail.com</p>
            <p className="small mb-1"> +201062605422</p>
            <p className="small"> Shirbin , Mansoura</p>
          </div>


          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Working Hours</h5>
            <p className="small mb-1">Mon - Fri: 9:00 AM - 9:00 PM</p>
            <p className="small">Sat - Sun: 10:00 AM - 6:00 PM</p>
          </div>
        </div>


        <div className="text-center py-3 border-top border-light mt-3">
          <p className="mb-0 small">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
