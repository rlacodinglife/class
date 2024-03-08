import React, { useState } from 'react'
import Count from './Components/Count'
import './css/totalCount.css'

export default function App04_UseState02() {

    const[totalCount,setTotalCount]=useState(0)
    const addTotalCount=()=>{
      setTotalCount((prev)=>prev+1)
    }
    const removeTotalCount=()=>{
      setTotalCount((prev)=>prev-1)
    }
  return (
    <>
    <Count onAdd={addTotalCount} onRemove={removeTotalCount}/>
    <Count onAdd={addTotalCount} onRemove={removeTotalCount}/>

    <div className='total_wrap'>
        <spam>sum :</spam> {totalCount}
    </div>
    </>
  )
}
