import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Pages/Root'
import Notfound from './Pages/Notfound'
import Home from './Pages/Home'
import Brand from './Pages/Brand'
import Product from './Pages/Product'

export default function App15_router02() {

    const router = createBrowserRouter(
        [{
            path: '/',
            element: <Root />,
            errorElement: <Notfound />,
            children:[
                {
                    index:true,element:<Home/>
                },
                {
                    path:'/brand',element:<Brand/>
                },
                {
                    path:'/product',element:<Product/>
                },

            ]
        }]
    )

    return (
       <RouterProvider router={router}/>
    )
}
