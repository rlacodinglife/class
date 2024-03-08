import React from 'react'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Notfound from './Pages/Notfound'
import Home from './Pages/Home'
import Brand from './Pages/Brand'
import Product from './Pages/Product'


export default function App14_Router01() {


    const router = createBrowserRouter(
        [
            {
                path: '/',
                element: <Home/>,
                errorElement: <Notfound />
            },
            {
                path: '/Brand',
                element: <Brand/>,
                errorElement: <Notfound />
            },
            {
                path: '/Product',
                element: <Product/>,
                errorElement: <Notfound />
            }
        ]
    )



    return (
    <RouterProvider router={router}/>
    )
}
