import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useUser } from '../../Context/UserProvider';

const UseOrders = () => {

    const { user } = useUser();
    const userId = user?.id;
    console.log(userId)


    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const [orderDetails, setOrderDetails] = useState(null);
    console.log("Order Details:", orderDetails)

    const GetUserOrders = async () => {
        if (!userId) return;
        setLoading(true);
        setError(null);
        try {
            const res = await axios.get(
                `http://clicktobuy.runasp.net/api/Orders/GetUserOrders/${userId}`
            );
            setOrders(res.data);
            console.log(res.data)
        } catch (err) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        GetUserOrders();
    }, [userId])


    const PlaceOrder = async () => {
        setLoading(true);
        try {
            const res = await axios.post(`http://clicktobuy.runasp.net/api/Orders/PlaceOrder/${userId}`, {},
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );
            if (res.status === 204 || res.status === 200) {
                return true;
            }
            return false;
        } catch (err) {
            console.error("Error placing order:", err.response?.data || err.message);
        } finally {
            setLoading(false);
        }

    }

    const OrderDetails = async (orderId) => {
        setLoading(true)
        try {
            const res = await axios.get(`http://clicktobuy.runasp.net/api/Orders/GetProductsDetails/${userId}`,
                {
                    params: { orderId }
                })
            console.log("Order details:", res.data);
            setOrderDetails(res.data);
            return res.data;
        } catch (error) {
            setError("Error in Show Details:", error.response?.data || error.message)
        } finally {
            setLoading(false)
        }
    }


    const RemoveOrder = async (orderId) => {
        setLoading(true)
        try {
            const res = await axios.delete(`http://clicktobuy.runasp.net/api/Orders/DeleteUserOrder/${userId}`,
                {
                    params: { orderId }
                })

            if (res.status === 200 || res.status === 204) {
                setOrders((prevOrders) =>
                    prevOrders.filter((order) => order.orderId !== orderId)
                );
                return true;
            }

            return false;
        } catch (error) {
            setError("Error removing order:", error.response?.data || error.message)
            return false;
        } finally {
            setLoading(false);
        }
    }

    const ClearOrders = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await axios.delete(`http://clicktobuy.runasp.net/api/Orders/ClearUserOrders/${userId}`)
            if (res.status === 204 || res.status === 200) {
                setOrders([]);
                return true;
            }
            return false;
        } catch (error) {
            setError(err.response?.data || err.message || "Something went wrong");
            return false;
        } finally {
            setLoading(false);
        }
    }



    return { orders, loading, error, orderDetails, PlaceOrder, ClearOrders, RemoveOrder, OrderDetails };
}

export default UseOrders