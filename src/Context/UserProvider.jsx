import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UseCart } from './CartProvider';
import api from '../services/axios-global';
import { toast } from 'react-toastify';

const UserContext = createContext();


export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    console.log("user", user);
    const [userRole, setUserRole] = useState("")
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [token, setToken] = useState(localStorage.getItem("token"));



    const RegisterFunc = async ({ email, password, firstName, lastName, phoneNumber }) => {
        setLoading(true);
        setError(null);

        try {
            const res = await api.post(`/Auth/Register`,
                {
                    email,
                    password,
                    firstName,
                    lastName,
                    phoneNumber,
                },
                { headers: { "Content-Type": "application/json" } }
            )


            localStorage.setItem("token", res.data.token);
            localStorage.setItem("refreshToken", res.data.refreshToken);
            localStorage.setItem("user", JSON.stringify(res.data));

            setUser(res.data);
            setToken(res.data.token);

            return res.data;

        }
        catch (err) {
            console.error("REGISTER ERROR:", err.response?.data);

            if (err.response?.data?.errors) {

                const allErrors = Object.values(err.response.data.errors).flat();
                allErrors.forEach((msg) =>
                    toast.error(msg, {
                        draggable: true,
                        draggablePercent: 50,
                        draggableDirection: "x",
                    })
                );
                setError(allErrors.join(", "));
            } else if (err.response?.data?.message) {

                toast.error(err.response.data.message);
                setError(err.response.data.message);
            } else {
                toast.error("Registration failed. Please check your input.");
                setError("Registration failed");
            }
            throw err;
        } finally {
            setLoading(false);
        }
    }


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
            const res = await api.post(
                '/Auth/Login',
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
            const token = localStorage.getItem('token')
            const refreshToken = localStorage.getItem("refreshToken");
            if (!refreshToken) return null;

            const res = await axios.post(
                "http://clicktobuy.runasp.net/api/Auth/RefreshToken",
                { token, refreshToken },
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            );

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("refreshToken", res.data.refreshToken);

            axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;

            setToken(res.data.token);
            setUser(prev => ({ ...prev, token: res.data.token }));

            return res.data.token;
        } catch (err) {
            console.error("Failed to refresh token", err);

            if (err.response?.status === 400 || err.response?.status === 401) {
                toast.error("the Session has expired LogIn Again", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setTimeout(() => {
                    Logout();
                }, 4200);
            }

            return null;
        }
    };


    useEffect(() => {
        if (!token) return;

        const expiresIn = 1800;
        const refreshBefore = (expiresIn - 60) * 1000;

        const timer = setTimeout(() => {
            RefreshToken();
        }, refreshBefore);

        return () => clearTimeout(timer);
    }, [token]);

    useEffect(() => {
        const reqInterceptor = axios.interceptors.request.use(
            (config) => {
                const currentToken = localStorage.getItem("token");
                if (currentToken) {
                    config.headers.Authorization = `Bearer ${currentToken}`;
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
    }, []);

    return (
        <UserContext.Provider value={{ userRole, setUserRole, user, Login, Logout, token, loading, error, RegisterFunc }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider