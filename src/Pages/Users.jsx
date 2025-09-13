import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useUser } from '../Context/UserProvider';
import api from '../services/axios-global';

const Users = () => {

    const { token } = useUser();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const GetUsers = async () => {
        setLoading(true);
        try {
            const res = await api.get(`/Users`)
            setUsers(res.data);
            console.log(res.data);
        } catch (err) {
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        GetUsers();
    }, [])

    if (loading) {
        return (
            <div className='d-flex justify-content-center align-items-center mt-5 pt-5'>
                <Spinner animation="border" className='mt-5 text-info' role="status">
                    <span className="visually-hidden">Loading Users...</span>
                </Spinner>
            </div>
        )
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <h1 className='fw-bold'>Users</h1>
            <div>
                {users.length === 0 ? (
                    <p>No users found.</p>
                ) : (
                    <div className="table-responsive mt-5">
                        <table className="table table-striped table-hover align-middle">
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>ID</th>
                                    <th>FirstName</th>
                                    <th>LastName</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, idx) => (
                                    <tr key={user.id}>
                                        <td>{idx + 1}</td>
                                        <td>{user.id}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber || "*****"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                )}
            </div>
        </>
    )
}

export default Users