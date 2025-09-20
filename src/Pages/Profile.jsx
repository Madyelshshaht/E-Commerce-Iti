import React from 'react'
import { useUser } from '../Context/UserProvider';
import LoadingSpinner from '../Components/Common/LoadingSpinner';
import Heading from '../Components/Common/Heading';

import img1 from "../assets/Cat_Image/download.jpg"

const Profile = () => {
    const { user } = useUser();

    const userRoles = user?.userRoles || [];
    const isAdmin = userRoles.includes("Admin");

    if (!user) {
        <LoadingSpinner message="Loading profile..." size={"lg"} />
    }

    return (
        <div className='container mt-4'>
            <Heading title={`Your Profile`} />

            <div className="d-flex justify-content-center align-items-center bg-light mt-5 p-md-5 ">
                <div className="card shadow-lg rounded-4 text-center w-100 p-5" >

                    {/* Avatar */}
                    <img
                        src={`https://avatar.iran.liara.run/public/${user?.id}`}
                        alt="User Avatar"
                        className="rounded-circle border border-3 border-primary shadow mx-auto"
                        width={150}
                        height={150}
                    />

                    {/* User Info */}
                    <h1 className="h3 fw-bold text-dark mt-3">
                        {user?.firstName} {user?.lastName}
                    </h1>
                    {!isAdmin &&
                        <p className="text-muted small">{user?.email}</p>
                    }

                    {/* Divider */}
                    <hr className="my-4" />

                    {/* Extra Info */}
                    <div className="text-start">
                        <p className="my-2">
                            <span className="fw-semibold">First Name:</span> {user?.firstName}
                        </p>
                        <p className="my-2">
                            <span className="fw-semibold">Last Name:</span> {user?.lastName}
                        </p>
                        {!isAdmin &&
                            <p className="my-2">
                                <span className="fw-semibold">Email:</span> {user?.email}
                            </p>
                        }
                        <div>
                            {userRoles.map((role, idx) => (
                                <p className="my-2" key={idx}>
                                    <span className="fw-semibold">Role:</span> {role}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile