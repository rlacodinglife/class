import React, { useState } from 'react'
import Count from './Components/Count'
import './css/totalCount.css'


export default function App04_useState02_me() {
    
    const[total,setTotalCount]=useState(0)
    
    const addtatal=()=>{
        setTotalCount((prev)=>prev+1)
    }
    const removetatal=()=>{
        setTotalCount((prev)=>prev-1)
    }
    
  
  
    return (
    <>
    <Count onAdd={addtatal} onRemove={removetatal}/>
    <Count/>

    <div className='total_wrap'>
        <spam>sum :</spam> {total}
    </div>
    </>
  )
}
