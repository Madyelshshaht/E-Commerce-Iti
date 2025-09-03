import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Components/Home';
import App from '../App';
import Categories from '../Components/Categories/Categories';
import Products from '../Components/Products/Products';
import Cart from '../Components/Cart/Cart';

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
                    if (typeof params.prefix === 'string' || !/^[a-z]+$/i.test(params.prefix) )
                    {
                        throw new Response("Bad Request", {
                            statusText: "Products Category Not Found",
                            status: 400,
                        });
                    }
                }
            },

            {
                path: "/cart",
                element: <Cart />,
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