import React from 'react'
import { useUser } from '../../Context/UserProvider'
import { Navigate } from 'react-router-dom';

const ProtectRouting = ({ children }) => {
    const { token } = useUser();
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectRouting