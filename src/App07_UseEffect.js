import React, { useEffect, useState } from 'react'
import Product from './Components/Product'
import axios from 'axios'

export default function App07_UseEffect() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('./data/products.json').then(
            (res)=>{
                setProducts(res.data)
            }
        )

    },[]
    )    

    return (
        <>
       {
           products.map((item)=>{
            return (
                <Product image={item.image} name={item.name} text={item.text} price={item.price} isNew={item.isNew}/>
                )
            
           })
        }
        </>
    )
}
