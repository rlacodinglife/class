import React, { useEffect, useState } from 'react'
import Product from './Components/Product'
import axios from 'axios'

export default function App07_UseEffect() {
    const saleStyle={
        width:'360px',
        height:'50px',
        margin:'0px auto',
        position:'relative',top:'10px'
    }





    const [products, setProducts] = useState([])


    const [saleCheck,setSaleCheck] = useState(false)

    const saleChange=()=>{
        setSaleCheck((prev)=>!prev)
    }

    useEffect(()=>{
        axios.get(`./data/products${saleCheck ? '_sale' :''}.json`).then(
            (res)=>{
                setProducts(res.data)
            }
        )

    },[saleCheck]
    )    

    return (
        <>

        <div className='saleCheck' style={saleStyle}>
            세일상품 <input type='checkbox' value={saleCheck} onChange={saleChange} style={{position:'relative',top:'2px'}}/>
        </div>

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
