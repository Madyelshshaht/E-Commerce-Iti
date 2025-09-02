import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../Components/Home';
import App from '../App';
import Categories from '../Components/Categories/Categories';

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
                path: "/category",
                element: <Categories />,
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