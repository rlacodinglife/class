import React from 'react'
import './css/Product.css'

export default function Parent({ children }) {
    return (

        <>

            <div className='product'>
                {children}
            </div>
        </>



    )
}
