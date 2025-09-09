import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Pages/Home';
import App from '../App';
import Categories from '../Pages/Categories';
import Products from '../Pages/Products';
import Cart from '../Pages/Cart';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import ProductDetails from '../Components/Products/ProductDetails';
import Profile from '../Pages/Profile';
import ProtectRouting from './ProtectRouting/ProtectRouting';
import Orders from '../Pages/Orders';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/categories",
                element: <Categories />,
            },

            {
                path: "/categories/products/:prefix",
                element: (<Products />), loaders: ({ params }) => {
                    if (typeof params.prefix === 'string' || !/^[a-z]+$/i.test(params.prefix)) {
                        throw new Response("Bad Request", {
                            statusText: "Products Category Not Found",
                            status: 400,
                        });
                    }
                }
            },

            {
                path: "/categories/products/:prefix/:id",
                element: (<ProductDetails />),
            },

            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/login",
                element: <Login />,
            },

            {
                path: "/profile",
                element:
                    <ProtectRouting>
                        <Profile />
                    </ProtectRouting>,
            },

            {
                path: "/orders",
                element:
                    <ProtectRouting>
                        <Orders />
                    </ProtectRouting>
            },




        ],
    },
]);


const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router;