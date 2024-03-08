import React, { useState } from 'react'
import './css/Count.css'



export default function Count2() {


    const[count, setCount]=useState(100)

    const add=()=>{
        if(count<1000){
            setCount((prev)=>prev+100)
        }
    }
    const remove=()=>{
        if(count>0){
            setCount((prev)=>prev-100)
        }
    }




  return (
    <div className='count_wrap'>
    <div className='remove'>
        <button className='remove_btn' onClick={remove}> - </button>
    </div>

    <div className='count'>
        {count}
    </div>

    <div className='add'>
        <button className='add_btn' onClick={add}> + </button>
    </div>
</div>
  )
}
