import { Link } from 'react-router-dom';


import { SlOptionsVertical } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";




import img1 from "../../assets/Cat_Image/download.jpg"
import { useState } from 'react';
import { useUser } from '../../Context/UserProvider';

const CategoryAdmin = ({ title, img, prefix, onEdit, onDelete, id }) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleDelete = () => {
        onDelete(id)
        setMenuOpen(false)
    }

    const { user } = useUser();
    const userRoles = user?.userRoles || [];
    const isAdmin = userRoles.includes("Admin");

    return (
        <div className="category position-relative  p-1  overflow-hidden w-100 overflow-x-hidden shadow">
            <Link to={`/categories/products/${prefix}`} className='text-decoration-none'>
                <div className='d-flex flex-column flex-md-row justify-content-between align-items-center shadow rounded-3  '>

                    {/* Image */}
                    <div className="">

                        {img ?
                            (
                                <img
                                    src={`data:image/png;base64,${img}`}
                                    alt={title}
                                    width={200}
                                    height={200}
                                    style={{ objectFit: "fill" }}
                                    className='p-2'
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

                    <div className='d-flex flex-md-row flex-column  justify-content-between align-items-center gap-3 w-100 px-lg-3 px-sm-2 px-2 '>

                        <h4 className="text-black">{title}</h4>


                        <div
                            className="d-flex flex-md-column justify-content-between gap-3 p-2 "
                            style={{ right: "30px", top: "5px", zIndex: 999 }}
                        >
                            <button
                                className=" btn btn-outline-info fw-bold w-100 text-start "
                                onClick={() => {
                                    onEdit();
                                    setMenuOpen(false);
                                }}
                                title='Edit'
                            >
                                <FaRegEdit />
                            </button>
                            <button
                                className=" btn btn-outline-danger fw-bold w-100 text-start "
                                onClick={handleDelete}
                                title='Delete'
                            >
                                <MdDeleteOutline />
                            </button>
                        </div>

                    </div>

                </div>
            </Link>
            {/* </Link> */}
        </div>
    );
};

export default CategoryAdmin;