import React, { useEffect, useState } from 'react'
import Product from './Components/Product'
import axios from 'axios'

export default function App07_UseEffect_me() {
    const divStyle={
        width:'360px',
        height:'100px',
        marginTop:'20px',
        margin:'0px auto',
        fontSize:'24px'
    }


    const[saleCheck,setSaleCheck] =useState(false)

    const changeCheck=()=>{
        setSaleCheck((prev)=>!prev)
    }



    const [A, setA] = useState([])

    useEffect(() => {
        axios.get(`./data/products${saleCheck ? `_sale` : ''}.json`).then((res) => {
            setA(res.data)
        })


    })

    return (
        <>
            <div className='selfCheck' style={divStyle}>
                세일상품
                <input className='checkbox' type='checkbox' style={{position:'relative',top:'3px',width:24,height:24}} onChange={changeCheck} value={saleCheck}/>

            </div>


            {
                A.map((item) => {
                    return (
                        <Product image={item.image} name={item.name} text={item.text} price={item.price} isNew={item.isNew}/>                       
            
        )
                })
            }
        </>
    )
}
