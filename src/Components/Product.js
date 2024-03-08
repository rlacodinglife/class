import React from 'react'
import './css/Product.css'

export default function Product({ image, name, text, price,isNew }) {
    return (

        <div className='product'>
            <p className='product_img'>
                <img src={image} alt='이미지설명' />
            </p>
            <p className='product_name'>
                {name}
            </p>
            <p className='product_text'>
                {text}
            </p>
            <p className='product_price'>
                {price} <span>원</span>
            </p>

            {
                isNew && <span className='new'>new</span>
                // isNew ? <span className='new'>new</span> : ''
                // (es6 에서는 ===true 생략하고 ? 가능)
            }

{/* 
            
            {
                isNew && <span className='new'>헤헤</span>

            } */}

        </div>

    )
}
