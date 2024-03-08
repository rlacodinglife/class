import React from 'react'
import Product from './Components/Product'

export default function App06_product() {
    return (
        <>
        <Product image="./images/m3_multiple.png" name="루메나 M3 멀티플 LED" text="세상에 없던 랜턴" price=" 59000" isNew={true}/>
        <Product image="./images/m3_multiple.png" name="루메나 M3 멀티플 LED" text="세상에 없던 랜턴" price=" 59000" isNew={false}/>
        </>
        
    )
}
