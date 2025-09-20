import axios from 'axios';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UseCart } from './CartProvider';
import api from '../services/axios-global';
import { toast } from 'react-toastify';

const UserContext = createContext();


export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {


    const [user, setUser] = useState(null)
    console.log("user", user?.expiresIn);
    const [userRole, setUserRole] = useState("")

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [token, setToken] = useState(localStorage.getItem("token"));
    console.log("tokenState:", token)

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

            if (res.data.expiresIn) startRefreshTimer(res.data.expiresIn);

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
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
            setToken(storedToken);

            if (parsedUser.expiresIn) startRefreshTimer(parsedUser.expiresIn);
        }

        // if (storedUser && storedToken) {
        //     setUser(JSON.parse(storedUser));
        //     setToken(storedToken);

        // }
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

            console.log("Token", res.data.token)
            localStorage.setItem("refreshToken", res.data.refreshToken);
            localStorage.setItem("user", JSON.stringify(res.data));

            setUser(res.data)
            setToken(res.data.token);

            if (res.data.expiresIn) startRefreshTimer(res.data.expiresIn);


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
        if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current);
        setToken(null);
        setUser(null);
    };

    const refreshTimerRef = useRef(null);

    const startRefreshTimer = (expiresInSeconds) => {
        if (refreshTimerRef.current) clearTimeout(refreshTimerRef.current);

        // جدّد قبل انتهاء التوكن بـ 60 ثانية
        const refreshBefore = (expiresInSeconds - 60) * 1000;

        refreshTimerRef.current = setTimeout(() => {
            RefreshToken();
        }, refreshBefore);
    };

    
    const RefreshToken = async () => {
        try {
            const refreshToken = localStorage.getItem("refreshToken");
            console.log(refreshToken)

            let currentToken = localStorage.getItem("token");

            console.log("Current token from storage:", currentToken);

            if (!refreshToken) return null;

            const res = await api.post(
                "/Auth/RefreshToken",
                { token: currentToken, refreshToken },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Refresh Token:", res.data);

            // Store new tokens
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("refreshToken", res.data.refreshToken);

            // Update state
            setToken(res.data.token);
            // setUser((prev) => ({ ...prev, token: res.data.token }));
            setUser((prev) => prev ? { ...prev, token: res.data.token } : prev);

            if (res.data.expiresIn) startRefreshTimer(res.data.expiresIn);

            return res.data.token;

        } catch (err) {
            console.error("Failed to refresh token", err);

            if (err.response?.status === 400 || err.response?.status === 401) {
                console.warn("⚠️ Refresh token is invalid or expired. Logging out...");
                Logout();
                toast.error("The session has expired. Please log in again.");
            }

            return null;
        }
    };

    useEffect(() => {

        const resInterceptor = api.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;

                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    const newToken = await RefreshToken();

                    if (newToken) {
                        originalRequest.headers.Authorization = `Bearer ${newToken}`;
                        return api(originalRequest);
                    }
                }

                return Promise.reject(error);
            }
        );

        return () => {
            api.interceptors.response.eject(resInterceptor);
        };
    }, []);

    return (
        <UserContext.Provider value={{ userRole, setUserRole, user, Login, Logout, token, loading, error, RegisterFunc }} >
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider