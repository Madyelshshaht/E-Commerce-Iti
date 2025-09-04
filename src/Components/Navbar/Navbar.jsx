import React from 'react'
import { Link } from 'react-router-dom'
import CartNav from './RightNav/CartNav'

const Navbar = () => {
    return (

        <>
            <nav className='pt-1 d-flex align-items-center justify-content-between px-3 container-fluid sticky-top bg-white '>
                <div className="">
                    <h2>Click to <Link className="navbar-brand badge text-bg-info p-2 fs-3 text-white" to="/">Buy</Link></h2>
                </div>

                <CartNav />
            </nav>

            <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                <div className="container-fluid">
                    <Link className="navbar-brand badge text-bg-info p-2 fs-3 text-white" to="/">E-Com</Link>

                    <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">E-Com</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">

                            <ul className="navbar-nav justify-content-start flex-grow-1 pe-3 ">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/categories">Categories</Link>
                                </li>
                            </ul>

                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>
            </nav>

        </>

    )
}

export default Navbar