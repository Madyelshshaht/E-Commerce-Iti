import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UseCart } from './CartProvider';

const UserContext = createContext();


export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {


    const [user, setUser] = useState(null)

    const [userRole, setUserRole] = useState("")

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const [token, setToken] = useState(localStorage.getItem("token"));

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
        }
    }, []);


    const Login = async (email, password) => {
        setLoading(true);
        setError(null);

        try {
            const res = await axios.post(
                'http://clicktobuy.runasp.net/api/Auth/Login',
                { email, password },
                { headers: { "Content-Type": "application/json" } }
            );

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("refreshToken", res.data.refreshToken);
            localStorage.setItem("user", JSON.stringify(res.data));
            // localStorage.setItem("role" , JSON.stringify(res.data.userRoles) )

            setUser(res.data)
            setToken(res.data.token);
            

            return res.data;
        } catch (err) {
            if (err.response && err.response.data) {
                setError(
                    typeof err.response.data === "string"
                        ? err.response.data
                        : err.response.data.message || "Login failed"
                );
            } else {
                setError("Something went wrong, please try again");
            }
            throw err;
        } finally {
            setLoading(false);
        }
    };

    const Logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");
        setToken(null);
        setUser(null);

    };


    const RefreshToken = async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");
            const token = localStorage.getItem('token')
            if (!refreshToken) return null;

            const res = await axios.post(
                "http://clicktobuy.runasp.net/api/Auth/refreshToken",
                { token, refreshToken },
                { headers: { "Content-Type": "application/json" } }
            );

            // خزّن القيم الجديدة
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("refreshToken", res.data.refreshToken);

            setToken(res.data.token);
            setUser(prev => ({ ...prev, token: res.data.token }));

            return res.data.token;
        } catch (err) {
            console.error("Failed to refresh token", err);
            Logout();
            return null;
        }
    };

    useEffect(() => {
        const reqInterceptor = axios.interceptors.request.use(
            (config) => {
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        const resInterceptor = axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;


                if (
                    error.response?.status === 401 &&
                    !originalRequest._retry
                ) {
                    originalRequest._retry = true;
                    const newToken = await RefreshToken();
                    if (newToken) {
                        originalRequest.headers.Authorization = `Bearer ${newToken}`;
                        return axios(originalRequest);
                    }
                }

                return Promise.reject(error);
            }
        );

        return () => {
            axios.interceptors.request.eject(reqInterceptor);
            axios.interceptors.response.eject(resInterceptor);
        };
    }, [token]);



    return (
        <UserContext.Provider value={{ userRole, setUserRole, user, Login, Logout, token, loading, error }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider