import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Pages/Root'
import Notfound from './Pages/Notfound'
import Home from './Pages/Home'
import Brand from './Pages/Brand'
import Product from './Pages/Product'
import ProductDetail from './Pages/ProductDetail'
import { isMobile } from 'react-device-detect'
import MoblieRoot from './Pages/Moblie/MoblieRoot'
import MoblieHome from './Pages/Moblie/MoblieHome'

export default function App15_router02() {

    let router = null

    if (isMobile) {
        router = createBrowserRouter(
            [{
                path: '/',
                element: <MoblieRoot />,
                errorElement: <Notfound />,
                children: [
                    {
                        index: true,path: '/', element: <MoblieHome/>
                    },
                    // {
                    //     path: '/', element: <MoblieHome/>
                    // },

                ]
            }]
        )
    } else {
        router = createBrowserRouter(
            [{
                path: '/',
                element: <Root />,
                errorElement: <Notfound />,
                children: [
                    {
                        index: true, element: <Home />
                    },
                    {
                        path: '/brand', element: <Brand />
                    },
                    {
                        path: '/product', element: <Product />
                    },
                    {
                        path: '/product/:productId', element: <ProductDetail />
                    },

                ]
            }]
        )
    }

    return (
        <RouterProvider router={router} />
    )
}
