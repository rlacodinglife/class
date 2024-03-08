import React, { useState } from 'react'
import './css/Count.css'

export default function Count({onAdd,onRemove}) {

    const [count, setCount] = useState(0)
    // 리액트는 재랜더링을 안하기떄문에 다시 랜더링을 해주려면 useState를써야함
    const addCount = () => {
        // setCount(count+1) 
        setCount((prev)=>prev+1)
        onAdd()
        // // setCount((prev)=>prev+1)
        // setCount((prev)=>{
        //     return prev+1 처럼 리턴될값만있으면 위처럼 생략할수있다.
        // })
        // 누적된값을 가져와서 기존의 값에 더하려면 약속된 prev
        // setCount안에는 값만들어갈수있다 ++이딴거안됨
    }

    const removeCount=()=>{
        if(count>0){
            // setCount((prev)=>prev-1)
            setCount((prev)=>prev-1) 
            onRemove()
        }
       
    }

// prev=기존값

    return (
        <div className='count_wrap'>
            <div className='remove'>
                <button className='remove_btn' onClick={removeCount}> - </button>
            </div>

            <div className='count'>
                {count}
            </div>

            <div className='add'>
                <button className='add_btn' onClick={addCount}> + </button>
            </div>
        </div>
    )
}
