import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Product() {

    const navigate=useNavigate()

    const [idtext,setidtext]=useState('')

    const changeidtext=(e)=>{
        setidtext(e.currentTarget.value)
    }

    const submitidtext=(e)=>{
        e.preventDefault()

        if(idtext.trim().length!==0){
            navigate(`/product/${idtext}`)
        }
        setidtext('')
        
    
    }

    const resetfocus=()=>{
        setidtext('')
    }


    
    return (
        <div>Product

            <form onSubmit={submitidtext}>
                <input type='text' placeholder='상품아이디 입력' style={{ width: 200, height: 25, margin: 20, textIndent: 10 }} onChange={changeidtext} value={idtext} onFocus={resetfocus}/>
            </form>
        </div>
    )
}
