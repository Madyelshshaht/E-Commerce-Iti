import React from 'react'
import { FaInstagram, FaWhatsapp, FaFacebook, FaGithub } from "react-icons/fa";


const ShareButton = () => {
  return (
    <div className="d-flex gap-3 my-2">

      <a
        href="https://wa.me/01055295531"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "40px", height: "40px" }}
      >
        <FaWhatsapp />
      </a>

      <a
        href="https://github.com/Madyelshshaht/E-Commerce-Iti"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
        style={{ width: "40px", height: "40px" }}
      >
        <FaGithub />
      </a>
    </div>
  )
}

export default ShareButton