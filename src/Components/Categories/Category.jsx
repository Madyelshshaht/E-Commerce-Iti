import { Link } from 'react-router-dom';
import "./style.css"

import { SlOptionsVertical } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";


import img1 from "../../assets/Cat_Image/download.jpg"
import { useState } from 'react';
import { useUser } from '../../Context/UserProvider';

const Category = ({ title, img, prefix, onEdit, onDelete, id }) => {

    const [menuOpen, setMenuOpen] = useState(false);


    const handleDelete = () => {
        onDelete(id)
        setMenuOpen(false)
    }

    const { user } = useUser();
    const userRoles = user?.userRoles || [];
    const isAdmin = userRoles.includes("Admin");

    return (
        <div className="category  position-relative  px-1 overflow-hidden">

            {isAdmin && (
                <div
                    className='position-absolute  p-1'
                    style={{ right: "0px", top: "5px", zIndex: "10px", cursor: "pointer" }}
                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    <div className="icon-wrapper">
                        <span className={`icon ${!menuOpen ? "show" : "hide"}`}>
                            <SlOptionsVertical size={20} />
                        </span>
                        <span className={`icon ${menuOpen ? "show" : "hide"}`}>
                            <IoMdClose size={25} />
                        </span>
                    </div>
                </div>
            )}

            {isAdmin &&
                menuOpen && (
                    <div
                        className="position-absolute bg-white shadow rounded  p-2 w-50 "
                        style={{ right: "40px", top: "5px", zIndex: 999 }}
                    >
                        <button
                            className=" btn btn-outline-info fw-bold w-100 text-start "
                            onClick={() => {
                                onEdit();
                                setMenuOpen(false);
                            }}
                        >
                            Edit
                        </button>
                        <button
                            className=" btn btn-outline-danger fw-bold w-100 text-start mt-2 border-top pt-2"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </div>
                )}

            <Link to={`/categories/products/${prefix}`} className="link  p-3 ">

                <div className="categoryImg">

                    {img ?
                        (
                            <img
                                src={`data:image/png;base64,${img}`}
                                alt={title}
                            />
                        )
                        : (
                            <img
                                src={img1}
                                alt="No Iamge"
                            />
                        )
                    }

                </div>

                <h4 className="categoryTitle">{title}</h4>
            </Link>
        </div>
    );
};

export default Category