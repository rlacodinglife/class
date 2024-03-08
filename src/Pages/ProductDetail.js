import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {

    const {productID}=useParams()

  return (
    <div>ProductDetail
        <p style={{margin:'20px'}}>상품아이디 : {productID}</p>
 
    </div>
  )
}
