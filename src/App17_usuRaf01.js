import React, { useEffect, useRef } from 'react'

export default function App17_usuRaf01() {
    //document.querySelectorAll을 쓰면 전체 컴포넌트에서 찾는다


    const selectedMenu = useRef([])

    useEffect(()=>{
   for(const item of selectedMenu.current){
    item.style.border='solid 3px red'
   }
    })

    const menus = [
        { index: 0, text: '김석주' },
        { index: 1, text: '박석주' },
        { index: 2, text: '최석주' },
        { index: 3, text: '하석주' },
    ]


    return (
        <div>
            <ul id='menu_list'>
            {
                menus.map((item)=>{
                    return(
                        <li key={item.index} ref={(qw)=>(selectedMenu.current[item.index]=qw)}>
                            {item.text}
                        </li>
                    )
                })
            }


                {/* <li>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
            <li>menu4</li> */}
            </ul>
        </div>
    )
}
