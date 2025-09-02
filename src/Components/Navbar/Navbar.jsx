import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid">
                <a class="navbar-brand badge text-bg-info p-2 fs-3 text-white" href="#">E-Com</a>

                <button class="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">


                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">E-Com</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-start flex-grow-1 pe-3 ">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/category">Categories</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/products">Products</Link>
                            </li>
                        </ul>
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Cart</a>
                            </li>
                        </ul>
                    </div>



                </div>


            </div>
        </nav>
    )
}

export default Navbar