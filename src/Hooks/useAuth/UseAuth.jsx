import React from 'react'
import { useState } from "react";
import axios from "axios";


const UseAuth = () => {
    const [token, setToken] = useState(localStorage.getItem("token"))
    
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const Login = async (email, password) => {
        setLoading(true);
        setError(null);

        try {
            const res = await axios.post(
                'http://clicktobuy.runasp.net/api/Auth/Login',
                { email, password },
                { headers: { "Content-Type": "application/json" } }
            );

            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            console.log("Login:", res.data)
            return res.data;
        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const Logout = () => {
        localStorage.removeItem("token");
        setToken(null)
        
    };

    return { loading, error, Login, Logout }
}

export default UseAuth