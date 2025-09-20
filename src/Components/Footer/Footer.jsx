import React from 'react';
import './style.css';
import ShareButton from '../Common/ShareButton';


const Footer = () => {
  return (

    <footer className="bg-dark text-white   mt-5">
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <div className="text-center py-2 border-bottom border-light px-2">
          <p className="mb-0 small">&copy; {new Date().getFullYear()} Your E-Commerce. All Rights Reserved. by Mady & Joo </p>
        </div>

        <ShareButton />

      </div>
    </footer>

  );
};

export default Footer;
