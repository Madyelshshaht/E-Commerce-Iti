
import React, { useEffect, useState } from 'react'
import api from '../services/axios-global';
import LoadingSpinner from '../Components/Common/LoadingSpinner';

const Users = () => {

    const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");


    const GetUsers = async () => {
        setLoading(true);
        try {
            const res = await api.get(`/Users`);
            setUsers(res.data);
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

    if (loading) { return <LoadingSpinner message="Loading Users..." size={"lg"} />; }

    if (error) {
        return <ErrorsMessage message={error} />
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
                                        <td>{user.phoneNumber || "---- ---- ----"}</td>
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